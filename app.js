import express from "express";
import "./db.js";
import userRouter from "./Routes/User_Router.js";
import courseRouter from "./Routes/Course_Router.js";
import adminRouter from "./Routes/admin_Router.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("SERVER RUNNING ON 3000 PORT!!!!!!!!!!!");
});
