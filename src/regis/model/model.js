const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity');
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
UserSchema.methods.generateAuthToken=function(){
   const token=jwt.sign({_id:this._id},"you56",{expiresIn:'7d'});
   return token;
}
const user=mongoose.model("user",UserSchema);
const validate=(data)=>{
    const Schema=joi.object({
        name:joi.string().required().label("name"),
        email:joi.string().required().label("email"),
        password:passwordComplexity().required().label("password")
    })
    return Schema.validate(data);
}
module.exports={user,validate};