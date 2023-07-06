const User = require("../models/userSchema");
const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();

//register User
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {

        //find existing user by email
        const existingEmail =await User.findOne({email});
        if(existingEmail){
            return res.status(401).json({error:"email already exist"})
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        res.status(500).json(err)
    };
});

//login User

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        //find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: "user not found" });

        };

        // Check the password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid  password' });
        }

        res.json({ message: 'Login successful' });


    } catch (err) {
        console.log(err)
    }
})


//update password
router.put("/update", async (req, res) => {
    const {email, currentPassword,newPassword } = req.body;
    try {
        //find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: "user not found" });

        };

        // Check the existing password
        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid old password' });
        }

        // Update the password
        const HashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = HashedNewPassword;
        
        await user.save();
        res.json({ message: 'password Update successful' });


    } catch (err) {
        console.log(err)
    }
})


//show all User
router.get("/showuser", async (req, res) => {

    try {
        const allUser = await User.find();

        res.status(201).json(allUser);
    } catch (err) {
        res.status(500).json(err)
    }
})


//delete user
router.delete("/deleteuser/:id", async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(201).json({
            message: "Successfully deleted"
        });
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports = router;