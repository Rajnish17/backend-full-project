require('dotenv').config();
const express =require("express");
const app =require("./app");
const port =process.env.PORT || 8090;
const mongoose =require("mongoose");


mongoose.connect( process.env.MONGO_URL).then(() => {
    console.log("connected");
  });



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})