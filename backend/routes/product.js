const router = require('express').Router()
const verifytoken = require('./verifytoken');
const Product = require('../modles/Product')

//ADD 
router.post('/', verifytoken, async(req, res)=>{
    if(req.user.isAdmin)
    {
        const newProduct = new Product(req.body)
    try {
        await newProduct.save();
        res.status(200).send("Product is added")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
})

//UPDATE
router.put('/:id', verifytoken, async(req, res)=>{
    if(req.user.isAdmin)
    {
        try{
        await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).send("Product is updated")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//DELETE
router.delete('/:id', verifytoken, async(req, res)=>{
    if(req.user.isAdmin)
    {
        try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send("Product is Deleted")
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 

//GET PRODUCT
router.get('/:id', verifytoken, async(req, res)=>{
    if(req.user.isAdmin)
    {
        try{
      const product_info =  await Product.findById(req.params.id)
        res.status(200).send(product_info)
    } catch (error) {
        res.status(500).send(error)
    }
    }
    
}) 
module.exports = router

//GET ALL PRODUCT
// router.get('/all', verifytoken, async(req, res)=>{
//     const qcategory = req.query.category
//     //let Products 
//         try{
//             // if(qcategory)
//             // {
//             //      Products = await Product.find({categories: {
//             //         $in: [qcategory]
//             //     } })
//             // }
//             // else
//             // {
//               const   Products = await Product.find()
            
        
//         res.status(200).send(Products)
//     } catch (error) {
//         res.status(500).send(error)
//     }
    
// }) 
module.exports = router