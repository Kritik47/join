const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const test=require('../model/model');
router.use(express.json());
router.post('/signup',async(req,res)=>{
    try{
        let m=new test(req.body);
        const EncryptPassword=await bcrypt.hash(m.password,10);
        m.password=EncryptPassword;
        m=await m.save();
        res.status(201).send(m);    
    }catch(e){
        res.status(400).send("Signup posting error...");
    }
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const m = await test.findOne({ email: email });
        if (m) {
            const DecryptPassword=await bcrypt.compare(password,m.password);
            if (DecryptPassword){
                res.status(201).send("success");
            } else {
                res.status(201).send("incorrect password");
            }
        } else {
            res.status(201).send("User is not SignUp");
        }
    } catch (e) {
        console.log("posting login error..");
    }
})

module.exports=router;