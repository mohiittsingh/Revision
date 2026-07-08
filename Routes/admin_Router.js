import express from "express";
import { validate } from "../middleware/validate.js";
import Adminmodel from "../models/Admin.js";
import { Admins_signup_schema } from "../Validations/Adminschema.js";
import { Admins_login_schema } from "../Validations/Adminschema.js";
import { signin, signup, bulk_courses } from "../controller/Admnincontroller.js";
import { auth } from './../middleware/auth.js';
import { createCourseSchema, updateCourseSchema } from './../Validations/Courseschema.js';
import { createCourse, updateCourse } from "../controller/coursecontroller.js";
const AdminRouter = express.Router();

AdminRouter.get("/", (req, res) => {
  res.send("Hello admin endpoint!!!");
});

AdminRouter.get("/me", auth, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

AdminRouter.post("/signup", validate(Admins_signup_schema), signup);
AdminRouter.post("/signin", validate(Admins_login_schema ),signin);
AdminRouter.post("/course", auth, validate(createCourseSchema), createCourse);
AdminRouter.put("/course/:id", auth, validate(updateCourseSchema), updateCourse);
AdminRouter.get("/bulk", auth, bulk_courses);
AdminRouter.get("/courses", (req, res) => {
  res.send("Purchasing  Endpoint");
});

AdminRouter.put("/courses", (req, res) => {
  res.send("Purchasing  Endpoint");
});

AdminRouter.post("/delete", (req, res) => {
  res.send("Deleting a course  Endpoint");
});

export default AdminRouter;
