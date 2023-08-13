const jwt = require('jsonwebtoken')
require('dotenv').config()
//MIDDLEWARE TO VALIDATE USER ID
const verifytoken = (req, res, next)=>{
    let token;
    if(!req.body.headers)
    {
        token = req.headers.token;
    }
    else{
        token = req.body.headers.token
    }
    
    if(token != null){
       const user_info =  jwt.verify(token, process.env.JWT_SEC)
       req.user = user_info;
    }

    else{
        res.status(500).send("Invalid user")
    }
    next();
}

module.exports = verifytoken