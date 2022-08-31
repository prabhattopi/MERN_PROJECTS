const express =require("express")
const dotenv=require("dotenv")
const connectDB=require('./config/db')
const morgan=require("morgan")
const {engine}=require("express-handlebars");
const path=require("path")
const passport=require("passport")
const session=require("express-session");
const mongoose = require("mongoose");
const MongoStore=require("connect-mongo")
const methodOverride=require("method-override")
//Load config
dotenv.config({ path: './config/config.env' })



//passportconfig
require("./config/passport")(passport)

connectDB()

//Logging
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//method-middleware
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))












if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

//HandleBars Helper

const {formatDate,stripTags,truncate,editIcon,select}=require("./helper/hbs")


//HandleBars
app.engine('.hbs', engine({helpers:{
  formatDate,
  stripTags,
   truncate,
   editIcon,
select
}, defaultLayout:'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


//express-session middleware

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:false,
    store:MongoStore.create({
      mongoUrl:process.env.MONGO_URI
    })
   
  }))




//passport middleware
app.use(passport.initialize())
app.use(passport.session())




//Global Variable
app.use(function(req,res,next){
  res.locals.user=req.user || null
  next()
})








//staticFolder
app.use(express.static(path.join(__dirname,"public")))




//routes

app.use("/",require("./routes/index"))
app.use("/auth",require("./routes/auth"))
app.use("/stories",require("./routes/stories"))



const PORT=process.env.PORT||5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))