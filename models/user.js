import { Schema } from "mongoose";
import { v4 as uuidv4 } from  "uuid";

const userschema = Schema({
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

const User = mongoose.model("UserModel", userSchema);
export default User;