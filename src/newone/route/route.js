const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
router.use(express.json());
const user=require('../models/models');
router.post('/register',async(req,res)=>{
    const{name,email,password,reenterPassword}=await req.body;
    try{
        const t=await user.findOne({email:email});
        if(t){
            res.send({message:"User Already Registered.."});
        }else{
            const hashpass=await bcrypt.hash(password,10);
            let m=new user({name,email,password:hashpass});
            m=await m.save();
            console.log(m);
            res.send({message:"registerd successfully now please login"});
        }
    }catch(e){
        console.log(e);
    }
})
router.post('/signin',async(req,res)=>{
    const{email,password}=await req.body;
    try{
        const t=await user.findOne({email:email});
        if(t){
            const EncryptPass=await bcrypt.compare(password,t.password);
            console.log(EncryptPass);
            if(EncryptPass){
                res.send({message:"Login Successfully..",t:t});
            }else{
                res.send({message:"invalid password.."});
            }
        }else{
            res.send({message:"user not registered.."});
        }
    }catch(e){
        console.log(e);
    }
})
module.exports=router;
