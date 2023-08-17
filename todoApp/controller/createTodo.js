//import the model
const Todo = require('../models/ToDo');

//define route handler

exports.createTodo = async(req,res)=>{
    try{
        //extract the request from req body
        const {title,description} = req.body;
        //create a new Todo obj and insert to DB
        const response = Todo.create({title,description});
        //send json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry successfully created'
        });
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:'Internal Server Error',
            message:error.message
        })
    }
} 