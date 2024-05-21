const mongoose =require('mongoose');
const Db=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/RELATION?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongo Connect For relation..");
    }catch(e){
        console.log(e);
    }
}
module.exports=Db;