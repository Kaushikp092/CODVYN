const express = require('express');
const User = require('../models/users');
const authMiddleware = require('../middleware/auth');
const bcrypt = require('bcrypt');
const router = express.Router();

//GET all users /api/users (all routes protected)
router.get('/', authMiddleware, async (req,res) =>{
    try {
        const users = await User.find().select("-password");
        if(!users) return res.status(404).json({
            message: 'Users Not Found'
        })
        res.status(200).json(users);
        
    } catch (err) {
       res.status(400).json({message: err.message});
    }
});

// GET user by ID  
router.get('/:id', authMiddleware, async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({
            message: 'User not Found'
        })
        res.status(200).json(user);
    } catch (err) {
       res.status(400).json({
        message: err.message
       }) 
    }
});

// POST Create a single user
router.post('/', authMiddleware, async (req,res)=>{
    try {

        const hashed = await bcrypt.hash(req.body.password, 10)

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashed
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// PUT update request
router.put('/:id', authMiddleware, async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user) return res.status(404).json({
            message: 'User not found'
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// DELETE request
router.delete('/:id', authMiddleware, async(req,res)=>{
try {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({message: 'User not found'})

    res.status(200).json({
        message: 'User deleted successfully'
    })
} catch (err) {
    res.status(400).json({
        message: err.message
    })
}
});

module.exports = router;