const express = require('express');
const router = express.Router();
const User = require('../modules/users');

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a single user
router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log(user);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const userid = await User.findById(req.params.id);
        if (!userid) {
            return res.status(404).json({
                message: 'User not Found'
            })
        }
        res.status(200).json(userid);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// PUT request
router.put('/:id', async (req, res) => {
    try {
        const userId = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userId) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        res.status(200).json(userId)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE request
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            });
        }
        res.status(200).json({
            message: 'user deleted successfully'
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

module.exports = router;
