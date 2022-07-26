
const path=require("path")
const express=require("express");
const dotenv=require("dotenv")
const colors=require("colors")
const morgan=require("morgan")
const connectDB=require("./config/db")


dotenv.config({path:"./config/config.env"})
connectDB()
const transactions=require("./Routes/transaction");
const { connect } = require("mongoose");

const app=express();

app.use(express.json())//BODY PARSER USED TO SEND DATA IN ADD TRANSACTION Middle ware


if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}




app.use("/api/v1/transactions", transactions);


if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,"client","build","index.html")));
    

}
const PORT=process.env.PORT || 8080;


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
