const express = require("express")
const User = require("./modles/User")
const app = express()
var cookieSession = require('cookie-session')


app.use(cookieSession({
    name: 'session',
    keys: ['key1'],
    resave: false,
    cookie: { maxAge: 24*60*60*60 }
  }))
app.use(express.json())
require('./database_connection')
//require('dotenv').config()
const cors = require('cors')
app.use(express.json())
app.use(cors())
//ENDPOINTS
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
app.use('/product', require('./routes/product'))
app.use('/Cart', require('./routes/Cart'))
app.use('/Order', require('./routes/order'))
app.use("/checkout", require('./routes/stripe'));


//LISTINING SERVER
app.listen(5000, ()=>{console.log("backend sever is running")})