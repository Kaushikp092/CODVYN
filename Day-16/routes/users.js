const express = require("express");
const router = express.Router();

let users = [
    {
        id: 1,
        name: "Evy",
        email: "ewherton0@nhs.uk",
    },
    {
        id: 2,
        name: "Montague",
        email: "mmcvity1@zdnet.com",
    },
    {
        id: 3,
        name: "Tandi",
        email: "tfriatt2@wordpress.org",
    },
    {
        id: 4,
        name: "kaushik",
        email: "kaushik@nytimes.com",
    },
    {
        id: 5,
        name: "patil",
        email: "patil@123",
    },
];

//GET /api/users returns a list of dummy users
router.get("/", (req, res) => {
    res.status(200).json(users);
});

// GET /api/users/:id returns a user by id
router.get("/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    user
        ? res.status(200).json(user)
        : res.status(404).json({
            message: "user not found ",
        });
});

// POST /api/users accepts user data and logs it
router.post("/", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    };

    users.push(newUser);
    res.status(201).json({
        message: "User created successfully :)",
        user,
    });
});

module.exports = router;
