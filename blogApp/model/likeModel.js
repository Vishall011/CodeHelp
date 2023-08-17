//import mongoose
const mongoose = require('mongoose')

//route handler
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',//ref to post model
    },
    User:{
        type:String,
        required:true
    }
});

//export
module.exports = mongoose.model("Like",likeSchema);