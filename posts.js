const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//find all
router.get('/', async (req, res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log('run getAll function');
    } catch (error) {
        res.json({message: error});
    }
    
});


//insert
router.post('/', async (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
        console.log('run insert function');
    } catch (error) {
        res.json({message: error});
    }
})

//get byId
router.get('/:postId', async (req, res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
        console.log('run getById function');
    } catch (error) {
        res.json({message: error});
    }
    
});

//delete byId
router.delete('/:postId', async (req, res)=>{
    try {
        const deletePost = await Post.remove({_id: req.params.postId});
        res.json(deletePost);
        console.log('run deleteById function');
    } catch (error) {
        res.json({message: error});
    }
    
});

//update byId
router.patch('/:postId', async (req, res)=>{
    try {
        const updatePost = await Post.update({_id: req.params.postId}, 
            {$set: {title: req.body.title, description:req.body.description}});
        res.json(updatePost);
        console.log('run updateById function');
    } catch (error) {
        res.json({message: error});
    }
    
});

module.exports = router;