import express from "express";
import Adminmodel from "../models/Admin.js";
import { Admins_signup_schema } from "../Validations/Adminschema.js";
import * as z from "zod"
const AdminRouter = express.Router();

AdminRouter.get("/", (req, res) => {
  res.send("Hello admin endpoint!!!");
});

AdminRouter.post("/signup", async (req, res) => {
 const email=req.boy.email;
 const first_name=req.boy.first_name;
 const last_name=req.boy.last_name;
 const password=req.body.password;
 
});

AdminRouter.post("/login", (req, res) => {
  res.send("admin Login Endpoint");
});

AdminRouter.get("/courses", (req, res) => {
  res.send("Purchasing  Endpoint");
});

AdminRouter.put("/courses", (req, res) => {
  res.send("Purchasing  Endpoint");
});

AdminRouter.post("/delete", (req, res) => {
  res.send("Deleting a course  Endpoint");
});
AdminRouter.get("/bulk", (req, res) => {
  res.send(" ALL courses!!");
});
export default AdminRouter;
