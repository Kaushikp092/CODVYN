const express = require('express')
const app = express();
const port = 3000;

//Step 1 -> added json middleware
app.use(express.json());

//Step 2 -> Import router
const userRouter = require('./routes/users');

//Step 3 -> Use router with /api prefix
app.use('/api/users', userRouter);


app.listen(port, () => {
    // console.log(`server running on https://localhost/${port}`);
})
