const express = require("express")
const app = express()
app.use(express.json())
require('./database_connection')
//const dotenv = require('dotenv')
const auth = require('./routes/auth')


//ENDPOINTS
app.use('/oath', auth);




//LISTINING SERVER
app.listen(5000, ()=>{console.log("backend sever is running")})