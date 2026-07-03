import { Schema } from "mongoose";
import { v4 as uuidv4 } from  "uuid";
import mongoose from "mongoose";
const userschema = new Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name:{type:String,
        required:true
    },
     email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("UserModel", userschema);
export default Usermodel;
