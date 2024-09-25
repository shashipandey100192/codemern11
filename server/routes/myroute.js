
const express = require('express');
const apps = express.Router();

apps.get("/",(req,res)=>{
    res.send("welcome to express js");
});

apps.get("/about",(req,res)=>{
    res.send("welcome about js");
});


module.exports= apps;


