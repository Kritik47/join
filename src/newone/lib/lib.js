const mongoose=require('mongoose');
const Dbs=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/NEWONE?retryWrites=true&w=majority&appName=Cluster0");
        console.log("newone database connect..");
    }catch(e){
        console.log(e);
    }
}
module.exports=Dbs;