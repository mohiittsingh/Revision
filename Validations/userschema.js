import {z} from "zod";
import Usermodel from './../models/user.js';
export const user_signup_schema=z.object({
    name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(4)

})
export const user_login_schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});