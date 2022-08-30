const express=require("express")
const passport = require("passport")
const router=express.Router()

//@desc  Auth with Google

router.get("/google",passport.authenticate("google",{scope:["profile"]}))

//@desc  google auth callback
// @desc GET/auth/google/callback

router.get("/google/callback",passport.authenticate("google",{failureRedirect: "/"}),(req,res)=>{
    res.redirect("/dashboard")
})

//@desc logout usrer
//@route /auth/logout
router.get("/logout",(req,res,next)=>{
    req.logout((error)=>{
        if(error){return next(error)}
    })
    res.redirect("/")
})

module.exports=router
