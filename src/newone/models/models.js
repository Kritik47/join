const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    reenterPassword:String
})
const user=mongoose.model('user',UserSchema);
module.exports=user;