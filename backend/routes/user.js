const router = require('express').Router()

router.post('/user', (req, res)=>{
    res.send(req.body.username);

})

module.exports = router