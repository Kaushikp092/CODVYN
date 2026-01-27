const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const app = express();
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected locally'))
    .catch(err => console.log(err))

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

const User = mongoose.model('User', userSchema);

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Successfully connected'
    })
})

module.exports = User;
module.exports = router;