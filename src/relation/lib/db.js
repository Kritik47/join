const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/RELATION?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoDb Connected....");
}).catch((e)=>{
    console.log(e);
})