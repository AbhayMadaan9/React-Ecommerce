const router = require('express').Router()
const User = require('../modles/User')
var bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken')
require('dotenv').config()

//REGISTER ENDPOINT
router.post('/register', async (req, res) => {
    try {

        const hashed_pass =  await bcrypt.hash(req.body.password, 10); 
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed_pass
        });


        await newUser.save();
        res.status(200).json(newUser);

    } catch (error) {
        res.status(500).send(error);
    }

})


//LOGIN ENDPOINT
router.post('/login', async (req, res) => {
    try {
        const is_user = await User.findOne({ username: req.body.username })
        if (is_user != []) {
            let is_pass = await bcrypt.compare(req.body.password, is_user.password)
            if (is_pass != []) {
                const accesstoken =  jwt.sign({
                    id: is_user.id,
                    isAdmin: is_user.isAdmin
                }, process.env.JWT_SEC)
                res.status(200).send(accesstoken)
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }



})

module.exports = router