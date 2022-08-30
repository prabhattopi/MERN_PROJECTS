const express=require("express")
const router=express.Router()
const {ensureAuth}=require("../middleware/auth")
const Story=require("../models/Story")

//@desc Show Add page
//@route GET request

router.get("/add",ensureAuth,(req,res)=>{
    res.render("stories/add")
})


//@desc create Story page
//@route POST request

router.post("/",ensureAuth,async(req,res)=>{
    try{
      req.body.user=req.user.id
      await Story.create(req.body)
      res.redirect("/dashboard")
    }
    catch(err){
    console.log(err)
    res.render("/error/500")
    }
})


//@desc show all stories
//@route GET request

router.get("/",ensureAuth, async(req,res)=>{
   try{
  const stories=await Story.find({status:"public"})
      .populate("user")
      .sort({createdAt:"desc"})
      .lean()

      res.render('stories/index',{
        stories
      })
   }
   catch(err){
    console.error(err)
    res.render("errro/500")
   }
})


//@desc  show edit page
//@route GET /stories/edit/:id request

router.get("/edit/:id",ensureAuth,async(req,res)=>{
  const story =await Story.findOne({
  _id:req.params.id
  }).lean()
  if(!story){
    return res.render("error/404")
  }
  if(story.user!=req.user.id){
    res.redirect("/stories")

  }
  else{
    res.render("stories/edit",{
      story,
    })
  }
})




module.exports=router
