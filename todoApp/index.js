//created a server
//npm i nodemon 
//nodemon index.js to automatically re-run the server
const express = require('express');//require function to import express
const app = express();

//load all config from env file to process
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//mimddle ware to parse json request
app.use(express.json())

//import routes
const todoRoutes = require('./routes/todo')

//mount the todo APIS
app.use('/api/v1',todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})

//connect to db
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get('/',(req,res)=>{
    res.send(`<h1>This is a Homepage</h1>`)
})
