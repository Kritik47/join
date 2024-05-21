const express=require('express');
const router=express.Router();
const people=require('../model/model');
router.use(express.json({ limit: '500mb' }));
router.post('/relation',async(req,res)=>{
    try{
        let m=new people(req.body);
        m=await m.save();
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("Posting Error");
    }
})
router.get('/relation',async(req,res)=>{
    try{
        const m=await people.find({});
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("Getting Errrr");
    }
})
router.get('/relation/:id',async(req,res)=>{
    try{
        const m=await people.findById(req.params.id);
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("Getting throug id Errrr");
    }
})
router.put('/relation/:id',async(req,res)=>{
    try{
        const m=await people.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("Getting throug id Errrr");
    }
})
router.delete('/relation/:id',async(req,res)=>{
    try{
        const m=await people.deleteOne({_id:req.params.id});
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("Getting throug id Errrr");
    }
})
router.get('/searching/:id',async(req,res)=>{
    try{
        const m=await people.find({
            "$or":[{"name":{$regex:req.params.id}}]
        });
        res.status(200).send(m);
    }catch(e){
        res.status(400).send("searching Errrr");
    }
})
module.exports=router;