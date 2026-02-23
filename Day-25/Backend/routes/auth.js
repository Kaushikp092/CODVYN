const express = require("express");
const {signupUser, loginUser} = require('../controllers/userControllers');
const router = express.Router();

//POST /signup
router.post("/signup", signupUser);

// POST /Login
router.post("/login", loginUser);

module.exports = router;
