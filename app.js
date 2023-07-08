const express =require("express");
const app =express();
const userRoute =require("./routes/user");
const studentRoute =require("./routes/student");
const cors = require('cors')
app.use(express.json());
app.use(cors());



app.use("/user",userRoute);
app.use("/user",studentRoute);







module.exports =app;