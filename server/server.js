const express = require("express");
const apps = express();

apps.get("/",(req,res)=>{
    res.send("welcome to express js");
});

apps.listen(8600,()=>{
    console.log("server is running at port no:");

})
