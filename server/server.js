const express = require("express");
// import express from "express";
require('dotenv').config();
const myport = process.env.PORT || 8700 

const apps = express();
apps.get("/",(req,res)=>{
    res.send("welcome to express js");
});

apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);

})
