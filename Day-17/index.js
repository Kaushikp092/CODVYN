const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

const userRouter = require('./modules/users')

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Example app listening http://localhost/${port}`))
