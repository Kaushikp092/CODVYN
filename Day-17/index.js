const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/users');
const auth = require('./middleware/auth');
const authRouter = require('./routes/auth');
require('dotenv').config();

const port = process.env.PORT;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected locally'))
  .catch((err) => console.log('MongoDB connection error:', err.message));

//Day-19 task
// app.use('/api/users', userRouter); 
  
// Day-20 Task
app.use('/api/users', auth, userRouter)
app.use('/api/auth', authRouter);

app.listen(port, () =>
  console.log(`Example app listening http://localhost:${port}`)
);
