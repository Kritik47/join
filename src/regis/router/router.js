const express=require('express');
const route=express.Router();
route.use(express.json({limit:'500mb'}));
const {user,validate}=require('../model/model');
route.get('/',(req,res)=>{
    res.send("hhhhiii");
})
module.exports=route;