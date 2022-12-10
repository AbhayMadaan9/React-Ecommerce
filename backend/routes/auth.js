const router = require('express').Router()
const User = require('../modles/User')
var bcrypt = require('bcryptjs');
const dotenv = require('dotenv');


//REGISTER ENDPOINT
router.post('/register', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt() 
        let hashed_password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed_password
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
        const is_user = await User.find({ username: req.body.username })
        //return res.send(is_user)
        if (is_user != NULL) {
            const is_pass = await bcrypt.compare(req.body.password, User.password)
            return res.send(is_pass)
            if (is_pass) {
                res.status(200).send("logged in")
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }



})

module.exports = router