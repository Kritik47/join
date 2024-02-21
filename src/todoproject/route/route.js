const express=require('express')
const router=express.Router();
const todos=require('../model/model');
router.use(express.json());
router.post('/todoapp',async(req,res)=>{
    try{
        const M=new todos(req.body);
        const T=await M.save();
        res.status(201).send({"todo":T});
    }catch(e){
        res.status(400).send({"msg":"something wrong in post method"})
    }
})
router.get('/todoapp',async(req,res)=>{
    try{
        const M=await todos.find({});
        res.status(201).send({"todo":M});
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
router.get('/todoapp/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const M=await todos.findById(id);
        res.status(201).send({"todo":M});
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
router.put('/todoapp/:id',async(req,res)=>{
    try{
        const M=await todos.updateOne({_id:req.params.id},{$set:req.body});
        res.status(201).send({"todo":M});
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
router.delete('/todoapp/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const M=await todos.deleteOne({_id:id});
        res.status(201).send({"todo":M});
    }catch(e){
        res.status(400).send({"msg":"something wrong in get method"})
    }
})
module.exports=router;