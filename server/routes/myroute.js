
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
});


apps.post("/registoruser",async(req,res)=>{
    const {email,fullname,phone,course,dob,pass} = req.body;
    const adduser = new myschimatype({
        email,fullname,phone,course,dob,pass
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);

});



module.exports= apps;



