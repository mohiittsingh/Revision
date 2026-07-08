import express from "express";
import Usermodel from "../models/user.js";
import { validate } from "../middleware/validate.js";
import { user_login_schema, user_signup_schema } from "../Validations/userschema.js";
import { signup } from "../controller/usercontroller.js";
import { signin } from "../controller/usercontroller.js";
import { auth } from "../middleware/auth.js";
const UserRouter = express.Router();

UserRouter.get("/me", auth, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

UserRouter.post("/signup",validate(user_signup_schema),signup);

UserRouter.post("/signin",validate(user_login_schema),signin);

UserRouter.get("/Purchases", (req, res) => {
  res.send("Purchasing  Endpoint");
});

export default UserRouter;
