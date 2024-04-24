const mongoose=require('mongoose');
const MundaProSchema=new mongoose.Schema({
    MdProname:{
        type:String
    },
    MdProPrice:{
        type:String
    },
    MdProBrand:{
        type:String
    }
})
const mundacompany=mongoose.model('mundacompany',MundaProSchema);
module.exports=mundacompany;