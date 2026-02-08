const express = require('express');
const mongoose = require('mongoose');
const app = express();
const auth = require('./middleware/auth');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
require('dotenv').config();

const port = process.env.PORT;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected locally'))
  .catch((err) => console.log('MongoDB connection error:', err.message));

app.use('/api/users', auth, userRouter)

app.use('/api/auth', authRouter);

app.listen(port, () =>
  console.log(`Example app listening http://localhost:${port}`)
);
