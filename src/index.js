require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const Db=require('./relation/lib/db');
Db();
app.use(require('./relation/router/router'));
const PORTS=process.env.PORT||3000;
app.listen(PORTS,()=>{
   console.log("listening in port 8000...");
}) 
