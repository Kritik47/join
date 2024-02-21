const express=require('express');
const cors=require('cors');
const app=express();
require('./todoproject/db/db');
app.use(cors());
app.use(require('./todoproject/route/route'));
app.use(require('./todoproject/signroute/signroute'));
app.listen(5000,()=>{
    console.log("i am listening in port 500");
})