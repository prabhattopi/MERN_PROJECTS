import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
  type:String,
  required:[true,"Please add your name"],
  tirm:true,
  maxlength:[20,"Your name up to 20 character"]
    },
    account:{
      type:String,
  required:[true,"Please add your email or phone no"],
  trim:true,
  unique:true

    },
    password:{
      type:String,
  required:[true,"Please add your password"],
  trim:true

    },
    avatar:{
      type:String,
 default:"https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"

    },
    role:{
      type:String,
      default:"user"

    },
    type:{
      type:String,
      default:"normal" //social, //phonenumber

    }
 
},{
  timestamps:true
})

export default mongoose.model("User",userSchema)