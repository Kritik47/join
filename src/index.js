const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
require('./relation/lib/db');
app.use(require('./relation/router/router'));
app.listen(8000,()=>{
   console.log("listening in port 8000...");
}) 
