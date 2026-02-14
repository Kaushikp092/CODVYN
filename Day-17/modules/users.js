const mongoose = require('mongoose');

// User schema aligned with auth routes (username + password)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);

