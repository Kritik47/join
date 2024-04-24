const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/TEXTING?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Contectionsss...");
}).catch((e)=>{
    console.log(e);
});