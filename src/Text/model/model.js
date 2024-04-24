const mongoose =require('mongoose');
const Schemas=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const test=mongoose.model("test",Schemas);
module.exports=test;