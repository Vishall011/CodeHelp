const Todo = require('../models/ToDo');

//define route handler i.e; behaviour

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo item from db
        const todos =await Todo.find({});
        //response
        res.status(200).json({
            sucess:true,
            data:todos,
            message:'Fetched all data'
        })
    }
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            error : err.message,
            message:"Internal serval error"
        })

    }
} 

exports.getTodoById = async(req,res)=>{
    try{
        //extract todo item basis of id
        //first fetch id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        //data for given id not found
        if(!todo){
            res.status(404).json({
                success:false,
                message:"No data found with paticular Id"
            })
        }
        //data for given id
        res.status(200).json({
            status:true,
            data:todo,
            message:"Data with paticular id fetched"
        })
    }
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            error : err.message,
            message:"Internal serval error"
        })
    }
}