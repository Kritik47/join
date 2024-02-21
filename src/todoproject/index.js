const express=require('express');
const cors=require('cors');
const app=express();
require('../todoproject/db/db');
app.use(cors());
app.use(require('./route/route'));
app.use(require('./signroute/signroute'));
app.listen(5000,()=>{
    console.log("i am listening in port 500");
})