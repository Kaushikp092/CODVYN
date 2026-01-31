const express = require('express')
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')
const userRouter = require('./routes/users');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.USER)
    .then(() => console.log('MongoDB connected locally'))
    .catch(err => console.log(err))

app.use('/api/users', userRouter);

app.use('/api/auth', authRoutes)

app.listen(port, () => console.log(`Example app listening http://localhost:${port}`))
