const mongoose=require('mongoose');
const DB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/REGIS?retryWrites=true&w=majority&appName=Cluster0");
        console.log("regis connect.....");
    }catch(e){
        console.log(e);
    }
}
module.exports=DB;