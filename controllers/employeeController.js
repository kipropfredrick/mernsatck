//require('./models/db');
const express=require('express');
var router=express.Router();

//display what is controller

 router.get('/',(req,res)=>{
 res.json('to home page');
 });
module.exports=router;

