
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const Db=require('./src/relation/lib/db');
Db();
app.use(require('./src/relation/router/router'));
app.listen(8000,()=>{
   console.log("listening in port 8000...");
}) 
