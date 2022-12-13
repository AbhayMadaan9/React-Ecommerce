const router = require('express').Router()
const Cart = require('../modles/Cart')
const verifytoken = require('./verifytoken')
//ADD 
router.post('/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id )
    {
        const newProduct = new Cart(req.body)
    try {
        await newProduct.save();
        res.status(200).send("Product is added to cart")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
})

//UPDATE
router.put('/:id/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id )
    {
        try{
        await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).send("Product is updated")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//DELETE
router.delete('/:id/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id)
    {
        try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).send("Product is Deleted")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//GET CART PRODUCTS 
router.get('/:user_id', verifytoken, async(req, res)=>{
    if(req.user.id === req.params.user_id)
    {
        try{
      const product_info =  await Cart.findOne({user_id: req.params.user_id})
        res.status(200).send(product_info)
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 
module.exports = router