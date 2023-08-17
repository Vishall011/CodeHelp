//import model
const Post = require('../model/postModel');
const Comment = require('../model/commentModel');

//business logic
exports.createComment = async (req,res)=>{
    try{
        //fetch date from req.body
        const {post,user,body}=req.body; 
        //crete a new comment object
        const comment = new Comment({
            post,user,body
        });
        console.log(`${user}`);
        //save the comment
        const savedComment = await comment.save();

        //find the post by id and include new comment id in its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                                     .populate('comments') //populate the comment array with comment documnet
                                     .exec(); //
                                
        //'new' to return updated comment
        res.json({
            post:updatedPost,
        });


    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment"
        });
    }
};



