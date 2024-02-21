const express=require('express');
const router=express.Router();
const sign=require('../signmodel/signmodel');
router.use(express.json());
router.post('/signup',async(req,res)=>{
    try{
        const M=new sign(req.body);
        let T=await M.save();
        T=T.toObject();
        delete T.password;
        res.status(201).send(T);
    }catch(e){
        res.status(400).send({"msg":"something wrong in post method"})
    }
})
router.get('/signup',async(req,res)=>{
    try{
        const M=await sign.find({});
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
router.post('/login',async(req,res)=>{
    try{
        let M=await sign.findOne(req.body).select("-password");
      if(req.body.email&&req.body.password){
        if(M){
            res.status(201).send(M);
        }
        else{
            res.status(201).send({"msg":"no user found"});
        }
      }
      else{
        res.status(201).send({"msg":"no result  found"});
      }
    }catch(e){
        res.status(400).send({"msg":"something wrong login post method"})
    }
})
module.exports=router;