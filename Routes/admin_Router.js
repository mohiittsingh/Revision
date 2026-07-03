import express from "express";
import Adminmodel from "../models/Admin.js";
const AdminRouter = express.Router();

AdminRouter.get("/", (req, res) => {
  res.send("Hello admin endpoint!!!");
});

AdminRouter.post("/signup", (req, res) => {
  res.send("Hello signup as admin !!!");
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
