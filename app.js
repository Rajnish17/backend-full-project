const express =require("express");
const app =express();
const userRoute =require("./routes/user");
const studentRoute =require("./routes/student");
const classRoute =require("./routes/classroutes");
const cors = require('cors')
app.use(express.json());
app.use(cors());



app.use("/user",userRoute);
app.use("/user",studentRoute);
app.use("/user",classRoute);







module.exports =app;