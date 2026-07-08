import bcrypt from "bcrypt";
import usermodel from "../models/user.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existinguser = await usermodel.findOne({ email });

        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await usermodel.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            success: true,
            message: "user created successfully",
            user: {
                id: user._id,
                name: user.last_name,
                email: user.email,
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
        const user=await usermodel.findOne({ email });
         if (!user) {
            return res.status(400).json({
                success: false,
                message: "user doesnt exists",
            });
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: "user"
        },
        process.env.JWT_USER_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    return res.status(200).json({
         success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.last_name,
        email: user.email,
        
      },
      token
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
