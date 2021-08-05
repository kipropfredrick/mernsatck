require('./models/db');
const express=require('express');
//display what is inthe controller
const employeecontroller=require('./controllers/employeeController');
var app=express();
var PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening in port ${PORT}`);;
});
app.use('/employee',employeecontroller);