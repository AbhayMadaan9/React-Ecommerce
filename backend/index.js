const express = require("express")
const User = require("./modles/User")
const app = express()
app.use(express.json())
require('./database_connection')
//require('dotenv').config()
app.use(express.json())

//ENDPOINTS
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));





//LISTINING SERVER
app.listen(5000, ()=>{console.log("backend sever is running")})