const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AuthUser } = require('../modules/users');

const router = express.Router();

//Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        //hash password
        const hasedPassword = await bcrypt.hash(password, 10);

        const user = new AuthUser({ username, password: hasedPassword })

        await user.save();

        res.status(201).json({ message: 'User created successfully' });

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        //finding user and storing in user var
        const user = await AuthUser.findOne({ username });

        if (!user) return res.status(404).json({
            error: 'User not found'
        })

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(404).json({
            error: 'Invalid password'
        })

        //create JWT 
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json(token)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;

