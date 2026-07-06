import {z} from "zod";
import Adminmodel from "../models/Admin.js";
export const Admins_signup_schema=z.object({
    first_name:z.string().min(2),
    last_name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(4)

})