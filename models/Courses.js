import { Schema } from "mongoose";
import { v4 as uuidv4 } from  "uuid";
import mongoose from "mongoose";
const Courseschema =  new Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    title:{type:String,
        required:true
    },
    price:{
        type:Number,

    },
    creatorid:{
        type: mongoose.Schema.Types.ObjectId,
    ref: "AdminModel"
    },
    description:{
        type:String
    }
    },
)
    


const Course_model = mongoose.model("CourseModel", Courseschema);
export default Course_model
