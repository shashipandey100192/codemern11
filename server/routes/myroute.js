
const express = require('express');
const apps = express.Router();
const myschimatype = require('../myschimatype/common');

apps.get("/",(req,res)=>{
    res.send("welcome to express js");
});

apps.get("/about",(req,res)=>{
    res.send("welcome about js");
});


apps.get("/alldata",async(req,res)=>{
   const  alld = await myschimatype.find();
   res.send(alld);
})


module.exports= apps;



