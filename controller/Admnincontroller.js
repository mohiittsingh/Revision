import bcrypt from "bcrypt";
import Adminmodel from "../models/Admin.js";
import jwt from "jsonwebtoken";
import Course_model from "../models/Courses.js";

export const signup = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const existingAdmin = await Adminmodel.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Adminmodel.create({
            first_name,
            last_name,
            email,
            password: hashedPassword,
        });
         

        return res.status(201).json({
            success: true,
            message: "Admin created successfully",
            admin: {
                id: admin._id,
                first_name: admin.first_name,
                last_name: admin.last_name,
                email: admin.email,
            },
        });
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};
  export const signin=async(req,res)=>{
   try{
        const {email, password } = req.body;
        const admin=await Adminmodel.findOne({ email });
         if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Admin doesnt exists",
            });
        }
        const isMatch=await bcrypt.compare(password,admin.password)
        if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = jwt.sign(
    {
        id: admin._id,
        email: admin.email,
        role: "admin"
    },
    process.env.JWT_ADMIN_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN
    }
);

    return res.status(200).json({
         success: true,
      message: "Login successful",
      admin: {
        id: admin._id,
        first_name: admin.first_name,
        last_name: admin.last_name,
        email: admin.email,
      },
      token,
      });
   }
   catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }


}

export const bulk_courses= async(req,res)=>{
    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access required",
            });
        }

        const courses = await Course_model.find().populate("creatorid", "first_name last_name email");

        return res.status(200).json({
            success: true,
            count: courses.length,
            courses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}



