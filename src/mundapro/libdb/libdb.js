const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/MUNDA_GROUP?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoMundaPro Connected...");
}).catch((e)=>{
    console.log(e);
});