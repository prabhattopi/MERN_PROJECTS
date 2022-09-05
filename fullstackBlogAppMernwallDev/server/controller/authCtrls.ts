import { Request, Response } from "express";
import Users from "../models/userModels";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { generateActiveToken } from "../config/generateToken";
import sendEmail from "../config/sendMails";
import { isPhone, isEmail } from "../middleware/valid";
const CLIENT_URL = `${process.env.BASE_URL}`;
const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;
      const user = await Users.findOne({ account });
      if (user) {
        return res.status(400).json({ msg: "User Already exist" });
      } else {
        const passwordHashed = await bcrypt.hash(password, 12);
        const newuser = {
          name,
          account,
          password: passwordHashed,
        };
        const active_token = generateActiveToken({ newuser });
        const url = `${CLIENT_URL}/active/${active_token}`;
        if (isEmail(account)) {
         sendEmail(account, url, "Verify your email address");
          return res.json({
            msg: "Success Please Check your Email",
          });
        }
      }
    } catch (error) {
      res.status(500);
      throw new Error("Please add all fields");
    }
  },
};
export default authCtrl;
