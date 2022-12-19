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
        try{
      const product_info =  await Product.findById(req.params.id)
        res.status(200).send(product_info)
    } catch (error) {
        res.status(500).send(error)
    }
    
    
}) 

//GET ALL PRODUCT
router.get('/', async(req, res)=>{
    const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.header("Access-Control-Allow-Origin", "*")
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
    
}) 
module.exports = router