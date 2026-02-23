const express = require("express");
const {
  createUser,
  getUsers,
  getUsersByID,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const authMiddleware = require('../middleware/auth')
const router = express.Router();

//GET all users /api/users (all routes protected)
router.get("/", authMiddleware, getUsers);

// GET user by ID
router.get("/:id", authMiddleware, getUsersByID);

// POST Create a single user
router.post("/", authMiddleware, createUser);

// PUT update request
router.put("/:id", authMiddleware, updateUser);

// DELETE request
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
