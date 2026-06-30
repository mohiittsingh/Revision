const express=require('express')
const CourseRouter=express.Router();
const Coursemodel=require('../db')
CourseRouter.get('/courses',(req,res)=>{
res.send("List of Courses!!!!!")
})
CourseRouter.post('/courses/purchase',(req,res)=>{
res.send("Purchase A course!!!!!")
})
CourseRouter.post('/courses/previwew',(req,res)=>{
res.send("Preview Courses!!!!!")
})

module.exports = CourseRouter;