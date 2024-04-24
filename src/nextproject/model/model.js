const mongoose=require('mongoose');
const NextPreSchema=new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:String,
        required:true
    },
    ProductCompany:{
        type:String,
        required:true
    }
})
const product=mongoose.models.product||mongoose.model("product",NextPreSchema);
module.exports=product;