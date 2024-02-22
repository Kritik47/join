const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/TODO?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoooAtlas.....");
}).catch((e)=>{
    console.log(e);
})