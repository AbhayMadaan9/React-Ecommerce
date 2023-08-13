const router = require('express').Router()
const verifytoken = require('./verifytoken');
const Product = require('../modles/Product')

//ADD 
router.post('/', verifytoken, async (req, res) => { 
  try {
    if (req.user.isAdmin) {
      const newProduct = await Product.create(req.body.data)
      const data = await newProduct.save();
      console.log(data)
      res.status(200).send("Product is added")
    }
  } catch (error) {
    res.status(500).send(error)
  }


})

//UPDATE
router.put('/:id', verifytoken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).send("Product is updated")
    } catch (error) {
      res.status(500).send(error)
    }
  }

})

//DELETE
router.delete('/:id', verifytoken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Product.findByIdAndDelete(req.params.id)
      res.status(200).send("Product is Deleted")
    } catch (error) {
      res.status(500).send(error)
    }
  }

})

//GET PRODUCT
router.get('/:id', async (req, res) => {
  try {
    // var id = new ObjectId(req.params.id);
    // console.log(id)
    const product_info = await Product.findOne({_id: req.params.id})
    console.log(product_info)
    //  res.header("Access-Control-Allow-Origin", "*")
    res.status(200).send(product_info)
  } catch (error) {
    res.status(500).send(error)
  }


})

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
  const qCategory = req.query.category;
  try {
    let products;
    if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    }
    else {
      products = await Product.find({});
    }
    res.header("Access-Control-Allow-Origin", "*")
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }

})
module.exports = router