import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./Routes/User_Router.js";
import courseRouter from "./Routes/Course_Router.js";
import adminRouter from "./Routes/admin_Router.js";

dotenv.config();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

const startServer = async () => {
  await connectDB();

  app.listen(3000, () => {
    console.log("SERVER RUNNING ON 3000 PORT!!!!!!!!!!!");
  });
};

startServer();
