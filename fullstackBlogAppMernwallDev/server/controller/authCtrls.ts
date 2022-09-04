
import { Request,Response } from "express";
import Users from "../models/userModels"
import bcrypt from "bcrypt"
import Jwt  from "jsonwebtoken";
import { generateActiveToken } from "../config/generateToken";


const authCtrl={
    register:async(req:Request,res:Response)=>{
   try{
 const {name,account,password}=req.body
 const user=await Users.findOne({account})
 if(user){
   return res.status(400).json({msg:"User Already exist"})
 }
 else{
 const passwordHashed=await bcrypt.hash(password,12)
 const newuser={
    name,account,password:passwordHashed


 }
const active_token=generateActiveToken({newuser})

 res.json(
    {
        status:"OK",
    msg:"Register Successfully.",
    data:newuser,
    active_token
   })

   }
}
   catch(error){
 
    res.status(500);
    throw new Error("Please add all fields")

   }
    }
}
export default authCtrl
