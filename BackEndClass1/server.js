//create a folder 
// move into folder
//npm init -y
//open folder in vs
// npm i express
//create server.js file

//server instation
const express = require('express');
const app = express();//create single instance of express

//server created on port 3000
app.listen(3000,()=>{
    console.log('Server started at port no. 3000')
})
//object of body parser use to parse req.body 
const bodyParser = require('body-parser');
//specifically parse json date and add it to req.body object
app.use(bodyParser.json());

//get request
app.get('/',(req,res)=>{
    res.send("get request Route setup and behaviour")
})
//post request
app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car sucessfully submitted")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error")} );
