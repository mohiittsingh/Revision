const express=require('express')
const app =express();
console.log(process);

const mongoose = require("./db");
const userRouter=require('./Routes/User_Router');
const CourseRouter=require('./Routes/Course_Router');
const AdminRouter=require('./Routes/admin_Router');


app.get('/',(req,res)=>{
res.send("Hello")
})
app.use('/user',userRouter);
app.use('/course',CourseRouter);
app.use('/admin',AdminRouter);


app.listen(3000,(req,res)=>{
    console.log("SERVER RUNNING ON 3000 PORT!!!!!!!!!!!");
    
})