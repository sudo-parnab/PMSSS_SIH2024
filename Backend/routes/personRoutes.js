const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Person data saved");

        const payload = {
            id: response._id,
            email: response.email,
        };
        console.log(JSON.stringify(payload));
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/profile", async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        const userId = userData.id;
        const user = await Person.findById(userId);
        console.log("Profile data fetched");
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Person data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await Person.findOne({ email });
//         if (!user || !(await user.comparePassword(password))) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }
//         res.status(200).json({ message: "Login successful" });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
// });

router.post("/login", async (req, res) => {
    try {
        console.log(JSON.stringify(req.body)); // Log the request body
        const { email } = req.body;
        const user = await Person.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: "Email not found" });
        }
        res.status(200).json({ message: "Email found" });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
