const router = require('express').Router()
const Order = require('../modles/Order')
const verifytoken = require('./verifytoken')

//ADD 
router.post('/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id )
    {
        const newOrder = new Order(req.body)
    try {
        await newOrder.save();
        res.status(200).send("Product is added to Order")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
})

//UPDATE
router.put('/:id/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id && req.user.isAdmin)
    {
        try{
        await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).send("Order is updated")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//DELETE
router.delete('/:id/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id && req.user.isAdmin)
    {
        try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).send("Order is Deleted")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//GET USER ORDER PRODUCTS 
router.get('/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id && req.user.isAdmin)
    {
        try{
      const product_info =  await Order.findOne({user_id: req.params.user_id})
        res.status(200).send(product_info)
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 
module.exports = router