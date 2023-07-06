const express =require("express");
const app =express();
const userRoute =require("./routes/user")
const cors = require('cors')
app.use(express.json());
app.use(cors());



app.use("/user",userRoute);







module.exports =app;