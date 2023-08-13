const router = require('express').Router()
const User = require('../modles/User')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifytoken = require('./verifytoken');


//REGISTER ENDPOINT
router.post('/register', async (req, res) => {
    //check if user already exists.
    try {
        const is_user = await User.findOne({ username: req.body.username })
        if (is_user == []) {
            const hashed_pass = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed_pass
            });
            await newUser.save();
            res.status(200).json(newUser);
        }
    } catch (error) {
        res.status(500).send(error);
    }

})


//LOGIN ENDPOINT
router.post('/login', async (req, res) => {
    try {
        const is_user = await User.findOne({ username: req.body.username })
        let is_pass = bcrypt.compare(req.body.password, is_user.password)

        if (is_user != [] && is_pass != []) {
            const accesstoken = jwt.sign({
                id: is_user.id,
                isAdmin: is_user.isAdmin
            }, process.env.JWT_SEC)
            res.status(200).send(accesstoken)
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

})
//GET USER
router.get('/user/:id', verifytoken, async (req, res) => {
    try {
        if(req.user === req.params.id)
        {
        const {id} = req.user;
        const user = await User.findById({_id: id});
       return res.send(user)
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

})

module.exports = router