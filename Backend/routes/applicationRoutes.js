const express = require("express");
const Student = require("../models/application");
const router = express.Router();

// POST /apply route
router.post("/apply", async (req, res) => {
    try {
        const data = req.body;
        const newStudent = new Student(data);
        const response = await newStudent.save();
        res.status(201).json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error submitting application" });
    }
});

// GET /applications route
router.get("/applications", async (req, res) => {
    try {
        const applications = await Student.find();
        res.json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching applications" });
    }
});

// GET /application/:id route
router.get("/application/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const application = await Student.findById(id);
        if (!application) {
            res.status(404).json({ message: "Application not found" });
        } else {
            res.json(application);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching application" });
    }
});

// PUT /application/:id route
router.put("/application/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const application = await Student.findByIdAndUpdate(id, data, {
            new: true,
        });
        res.json(application);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating application" });
    }
});

// DELETE /application/:id route
router.delete("/application/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Student.findByIdAndRemove(id);
        res.json({ message: "Application deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting application" });
    }
});

module.exports = router;
