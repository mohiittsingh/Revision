import express from "express";
import Course_model from "../models/Courses.js";
const CourseRouter = express.Router();

CourseRouter.get("/courses", (req, res) => {
  res.send("List of Courses!!!!!");
});

CourseRouter.post("/courses/purchase", (req, res) => {
  res.send("Purchase A course!!!!!");
});

CourseRouter.post("/courses/previwew", (req, res) => {
  res.send("Preview Courses!!!!!");
});

export default CourseRouter;
