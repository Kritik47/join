const express=require('express');
const router=express.Router();
const product=require('../model/model');
router.use(express.json());
router.post('/nextapi',async(req,res)=>{
    try{
        let M=await product(req.body);
        M=await M.save();
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"post error"}); 
    }
})
router.get('/nextapi',async(req,res)=>{
    try{
      const M=await product.find({});
      res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"get error"});
    }
})
router.get('/nextapi/:id',async(req,res)=>{
    try{
        const M=await product.findById(req.params.id);
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"dynamic get error"});
    }
})
router.put('/nextapi/:id',async(req,res)=>{
    try{
        const M=await product.updateOne({_id:req.params.id},{$set:req.body});
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"dynamic put error"});
    }
})
router.delete('/nextapi/:id',async(req,res)=>{
    try{
        const M=await product.deleteOne({_id:req.params.id});
        res.status(201).send(M);
    }catch(e){
        res.status(400).send({"msg":"dynamic delete"});
    }
})
module.exports=router;