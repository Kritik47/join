const express=require('express');
const app=express();
const Dbs=require('./newone/lib/lib');
const cors=require('cors');
app.use(cors());
app.use(require('./newone/route/route'));
Dbs();
app.listen(8000,()=>{
   console.log("listens 8000");
})