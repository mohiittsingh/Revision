import express from "express";

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.send("Hello user endpoint!!!");
});

UserRouter.post("/signup", (req, res) => {
  res.send("Hello signup route!!!");
});

UserRouter.post("/login", (req, res) => {
  res.send("Login Endpoint");
});

UserRouter.get("/Purchases", (req, res) => {
  res.send("Purchasing  Endpoint");
});

export default UserRouter;
