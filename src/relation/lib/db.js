const mongoose =require('mongoose');
const Db=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Mongo Connect For relation..");
    }catch(e){
        console.log(e);
    }
}
module.exports=Db;