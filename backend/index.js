const { json } = require("express")
const express = require("express")
const app = express()
app.use(express.json())
require('./database_connection')

//ENDPOINTS


//LISTINING SERVER
app.listen(5000, ()=>{console.log("backend sever is running")})