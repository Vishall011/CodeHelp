
const express = require('express');
const router = express.Router();

//import controller
const {likePost,unlikePost} = require('../controller/likecontroller');
const { createComment } =require('../controller/commentController');
const { createPost,getAllPost } = require('../controller/postController')  
//create mapping 


router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllPost);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);
//exports
module.exports = router;