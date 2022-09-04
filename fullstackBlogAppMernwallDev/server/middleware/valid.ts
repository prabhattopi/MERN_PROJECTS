import {Request,Response,NextFunction} from "express"

export const validRegister=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,account,password}=req.body
    if(!name){
        return res.status(400).json({msg:"Please add your name"})

    }
    else if(name.length>20){
        return res.status(400).json({msg:"Your name is up to chars long"})

    }

    if(!account){
        return res.status(400).json({msg:"Please add your email or Phone no."})

    }
    else if(!isEmail(account)&&!isPhone(account)){
        return res.status(400).json({msg:"Email or Phone is not valid"})

    }

    if(password.length<6){
        return res.status(400).json({msg:"Password length must be greater than equal to 6"})
    }

    next();
    

}

function isPhone(phone:string){
    const re=/^[+]/g
    return re.test(phone)
}

function isEmail(email:string) {
              
    // Regular Expression (Not accepts second @ symbol
    // before the @gmail.com and accepts everything else)
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
}
