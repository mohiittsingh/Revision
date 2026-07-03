import { Schema } from "mongoose";
import { v4 as uuidv4 } from  "uuid";
import mongoose from "mongoose";
const Purchasesschema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
})


const Purchases_model = mongoose.model("PurchaseModel", Purchasesschema);
export default Purchases_model;
