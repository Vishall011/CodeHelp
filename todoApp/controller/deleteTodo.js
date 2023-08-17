const Todo = require('../models/ToDo');

exports.deleteTodo = async (req,res) =>{
    try{
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);
        
        res.status(200).json({
            success:true,
            message:"todo removed successfully"
        })

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:'Internal server error'

        })

    }
}