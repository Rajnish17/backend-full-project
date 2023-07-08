const Student = require("../models/studentSchema");
const router = require("express").Router();


//get data from student route
router.post("/student", async (req, res) => {
    const data = new Student(req.body);
    try {
        await data.save();
        res.status(200).json({
            message: "sucess",
            data: data
        })
    } catch (error) {
        res.status(400).json(error);
    }
});


// find all student data
router.get("/student/find", async (req, res) => {
    try {
        const data = await Student.find();
        res.status(200).json({
            message: "sucess",
            data: data
        })
    } catch (error) {
        res.status(400).json(error);
    }
});


//delete student data
router.delete("/student/delete/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "sucessfully deleted",
        })
    } catch (error) {
        res.status(400).json(error);
    }
});

//update student data
router.put("/student/update/:id", async (req, res) => {
    try {
        const updatedData = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(200).json({
            message: "sucessfully update",
            data: updatedData
        })
    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = router;