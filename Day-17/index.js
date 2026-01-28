const express = require('express')
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected locally'))
    .catch(err => console.log(err))

const userRouter = require('./routes/users');

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Example app listening http://localhost:${port}`))
