require('express')
const router = require('express').Router()
const User = require('../modles/User')
var bcrypt = require('bcryptjs');
require('dotenv').config()
const verifytoken = require('./verifytoken');



//UPDATE 
router.put('/:id', verifytoken, async (req, res) => {
    try {
        //validate user and check if he/she is admin or not (authorization)
        if (req.user.id === req.params.id) {
            //again encrypt the password
            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const updateduser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            return res.status(200).send(updateduser);
        }
    } catch (error) {
        return res.status(500).json(error)
    }

})

//DELETE
router.delete('/:id', verifytoken, async (req, res) => {
    try {
        //validate user and check if he/she is admin or not (authorization)
        if (req.user.id === req.params.id) {

            await User.findByIdAndDelete(req.params.id);
            return res.status(200).send("USER HAS BEEN DELETED");
        }
    } catch (error) {
        return res.status(500).json(error)
    }

})

//GETUSER
router.get('/:id', verifytoken, async (req, res) => {
    try {
        //validate user and check if he/she is admin or not (authorization)
        if (req.user.id === req.params.id) {

            const user_info = await User.findById(req.params.id).select("-password");
            return res.status(200).send(user_info);
        }
    } catch (error) {
        return res.status(500).json(error)
    }

})


//GET ALL USER FOR ADMIN
router.get('/', verifytoken, async (req, res) => {
    try {
        //validate user and check if he/she is admin or not (authorization)
        const query = req.query.new_users;

        if (req.user.isAdmin) {
            const user_info = query ? await User.find().sort({ _id: -1 }) : await User.find()

            return res.status(200).send(user_info);
        }
    } catch (error) {
        return res.status(500).json(error)
    }

})

//GET USER STATS  (THis will get info users joined last month, year)
router.get('/stats', verifytoken, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }



})
module.exports = router;