const express=require('express');
const mundacompany=require('../model/model');
const router=express.Router();
router.use(express.json());
router.post('/mdzone',async(req,res)=>{
    try{
        let m=await mundacompany(req.body);
        m=await m.save();
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("Posting error...");
    }
})
router.get('/mdzone',async(req,res)=>{
    try{
        const m=await mundacompany.find({});
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("get error..");
    }
})
router.get('/mdzone/:id',async(req,res)=>{
    try{
        const m=await mundacompany.findById(req.params.id);
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("get error..");
    }
})
router.put('/mdzone/:id',async(req,res)=>{
    try{
        const m=await mundacompany.updateOne({_id:req.params.id},{$set:req.body});
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("put error...");
    }
})
router.delete('/mdzone/:id',async(req,res)=>{
    try{
        const m=await mundacompany.deleteOne({_id:req.params.id});
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("delete error...")
    }
})
router.get('/mdzones/search/:id',async(req,res)=>{
    try{
        const m=await mundacompany.find({
            "$or":[{MdProname:{$regex:req.params.id}}]
        });
        res.status(201).send(m);
    }catch(e){
        res.status(400).send("search error...");
    }
})
module.exports=router;