import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import routes from "./routes/index"


//Middleware
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())

//Routes
app.use("/api",routes.authRouter)



//Database
import "./config/db"



//server listening
const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`server is listen on port ${PORT}`))