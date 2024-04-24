const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/NEXTPR?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Mongoose Connected...");
}).catch((e)=>{
    console.log(e);
})