const Class = require("../models/classSchema");
const router = require("express").Router();


//get data from class route
router.post("/class", async (req, res) => {
    const data = new Class(req.body);
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


// find all class data
router.get("/class/find", async (req, res) => {
    try {
        const data = await Class.find();
        res.status(200).json({
            message: "sucess",
            data: data
        })
    } catch (error) {
        res.status(400).json(error);
    }
});


//delete class data
router.delete("/class/delete/:id", async (req, res) => {
    try {
        await Class.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "sucessfully deleted",
        })
    } catch (error) {
        res.status(400).json(error);
    }
});

//update class data
router.put("/class/update/:id", async (req, res) => {
    try {
        const updatedData = await Class.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(200).json({
            message: "sucessfully update",
            data: updatedData
        })
    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = router;