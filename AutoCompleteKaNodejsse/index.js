const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require("cors")
dotenv.config()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}
).then(()=>console.log("connected with db"))
.catch((error)=>{
    console.log(error)
})

const schema=new mongoose.Schema({
    plot:String,
    title:String,
    poster:String

})
const Movie=mongoose.model("movie",schema)

app.get("/search",cors(),async(req,res)=>{
    try{

    const {title}=req.query

    const agg=[
        {
            $search:{
                autocomplete:{
                    query:title,
                    path:"title",
                    fuzzy:{
                        maxEdits:2
                    }
                }
            }
           
        },
        {
            $limit:5
        },
        {
            $project:{
                _id:0,
                title:1,
                poster:1,
                plot:1
            }
        }
    ]
  const response= await Movie.aggregate(agg)

  return res.status(200).json(response)

    
    }
    catch(err){
return res.json([])
    }
})



const PORT=process.env.PORT || 3002

app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))