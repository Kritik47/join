const mongoose=require('mongoose');
const RelationSchema=new mongoose.Schema({
    name:String,
    father:String,
    mother:String,
    age:String,
    education:String,
    address:String,
    contact:String,
    cast:String,
    gender:String,
    image:String
})
const people=mongoose.model('people',RelationSchema);
module.exports=people;
