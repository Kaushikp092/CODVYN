const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
});

const UserAuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true //hashed password
    }
})

const User = mongoose.model('User', userSchema);
const AuthUser = mongoose.model('AuthUser', UserAuthSchema);

module.exports = {User, AuthUser};



