import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/COursesellingweb_100xdevs")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const PurchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

const UserModel = mongoose.model("User", UserSchema);
const CourseModel = mongoose.model("Course", CourseSchema);
const AdminModel = mongoose.model("Admin", AdminSchema);
const PurchaseModel = mongoose.model("Purchase", PurchaseSchema);

export { UserModel, CourseModel, AdminModel, PurchaseModel };
export default mongoose;
