const Post = require('../model/postModel');
const Like = require('../model/likeModel');



exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true})
        .populate("likes").exec();

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking the post",
        });
    }
}

exports.unlikePost = async (req,res)=>{
    try{
        const {post,like} = req.body;
        
        //find and delete like collection
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});
        
        //update after unliking post
        const updatedPost = Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost
        })
    }
    catch(error){
        res.status(400).json({
            error :'Error while unliking the post'
        })
    }
}
