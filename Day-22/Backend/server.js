const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173',credentials: true}));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    }),
  )
  .catch((err) => console.log("mongoDB connection Error: ", err));
