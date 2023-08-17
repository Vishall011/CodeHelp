//create instance of express
const express = require('express');
const app = express();

//load .env file
require('dotenv').config();//import all the configuration from .env and load in object Process
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json())

//import routes
const blog = require('./routes/blog');
//mount api
app.use('/api/v1',blog);
//db connect
const dbConnect = require('./config/dbConnection');
dbConnect();

//start server
app.listen(PORT,()=>{
    console.log(`App started at port no. ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>This is my Homepage At start</h1>`)
})

