const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modules/users');

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);
        await User.create({ username, email, password: hashed });
        res.status(201).json({
            message: 'Signup successful'
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (!user) return res.status(404).json({
            message: 'User not found'
        })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({
            message: 'invalid credentials'
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30min' });

        res.status(200).json(token);

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

module.exports = router;

