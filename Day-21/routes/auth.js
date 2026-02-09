const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Users = require("../models/users");
const router = express.Router();

//POST /signup
router.post("/signup", async (req, res) => {
    try {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const existingUser = await Users.findOne({email}); 
    if (existingUser)
        return res.status(400).json({ message: "Email already registered" });
    
    await Users.create({username, email, password: hashed});
    res.status(201).json({message: 'User resgistered successfully'});

  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// POST /Login
router.post('/login', async (req,res)=>{
    const { email, password} = req.body;
    try {
        const user = await Users.findOne({email});
        if(!user) return res.status(404).json({message: 'User not found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'invalid credentials'});

        const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: '1d'});

        res.status(200).json({token})
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;
