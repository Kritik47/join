const express=require('express');
const router=express.Router();
const login=require('../loginmodel/loginmodel')
router.use(express.json());
router.post('/login',async(req,res)=>{
    try{
        const M=new login(req.body);
        const T=await M.save();
        res.status(201).send(T);
    }catch(e){
        res.status(400).send({"msg":"something wrong in post method"})
    }
})
router.get('/login',async(req,res)=>{
    try{
        const M=await login.find({});
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
module.exports=router;