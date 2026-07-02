import { Schema } from "mongoose";
import { v4 as uuidv4 } from  "uuid";

const Adminschema = Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    first_name:{type:String,
        required:true
    },
     last_name:{type:String,
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

const Admin = mongoose.model("AdminModel", Adminschema);
export default Admin;