const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/users');

const createUser = async (req,res)=>{
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser) return res.status(400).json({message: 'Email Already Exists'});

        const hashed = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashed
        })

        res.status(201).json({message: 'User Created Successfully',data: user});
        
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const getUsers = async (req,res) =>{
    try {
        const users = await User.find({},'-password');
        res.status(200).json({users});
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

const getUsersByID = async (req,res) =>{
    try {
        const user = await User.findById(req.params.id,'-password');
        if(!user) return res.status(404).json({message: 'User Not Found'});
        res.status(200).json({user});
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};

const updateUser = async (req,res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, select: '-password' });
        if(!user) return res.status(400).json({message: 'User Not Found'});
        res.status(200).json({message: 'User Updated', data: user});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const deleteUser = async (req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({message: 'User Not Found'});
        res.status(200).json({message: 'User Deleted Successfully'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const signupUser = async (req,res)=>{
    try {
        const {username, email, password} = req.body;
        const hashed = await bcrypt.hash(req.body.password, 10);
        const existingUser = await User.find({email});
        if(existingUser) return res.status(400).json({message: 'Email Already Registeerd'});

        await User.create({username, email, password: hashed});
        res.status(201).json({message: 'User registered successfully'});
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const loginUser = async (req,res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: 'User Not Found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'Invalid credentials'});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '1d'});

        res.status(200).json({token, user:{
            id: user._id,
            username: user.username,
            email: user.email
        }});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createUser,
    getUsers,
    getUsersByID,
    updateUser,
    deleteUser,
    signupUser,
    loginUser
};
