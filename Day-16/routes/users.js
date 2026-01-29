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

// PUT /api/users/:id updates a user by id
router.put("/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({
            message: "user not found",
        });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.status(200).json({
        message: "user updated successfully",
        user,
    });
});

//PATCH /api/users/:id partially updates a user by id
router.patch("/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({
            message: "user not found",
        });
    }

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;

    res.status(200).json({
        message: "user patched successfully",
        user,
    });
});

//DELETE /api/users/:id deletes a user by id
router.delete('/:id',(req,res)=>{
    const user = users.findIndex(u => u.id === parseInt(req.params.id));

    if(user === -1){
        return res.status(404).json({
            message : 'user not found',
        })
    }

    const deletedUser = users.splice(user, 1);

    res.status(200).json({
        message: 'user deleted successfully',
        user: deletedUser[0]
    })

})

module.exports = router;
