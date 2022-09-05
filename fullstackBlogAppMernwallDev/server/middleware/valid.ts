import {Request,Response,NextFunction} from "express"

export const validRegister=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,account,password}=req.body
    const errors=[]
    if(!name){
       errors.push("Please add your name.")

    }
    else if(name.length>20){
       errors.push("Your name is up to chars long")

    }

    if(!account){
      errors.push("Please add your email or Phone no.")

    }
    else if(!isEmail(account)&&!isPhone(account)){
   errors.push("Email or Phone is not valid")

    }

    if(password.length<6){
     errors.push("Password length must be greater than equal to 6")
    }
 if(errors.length>0) return res.status(400).json({msg:errors})


    next();
 
   
    

}

export function isPhone(phone:string){
    const re=/^[+]/g
    return re.test(phone)
}

export function isEmail(email:string) {
              
    // Regular Expression (Not accepts second @ symbol
    // before the @gmail.com and accepts everything else)
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
}
