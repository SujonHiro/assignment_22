const express=require('express');
const app= new express();
const router=require("./src/router/api");
require("dotenv").config();
const multer=require("multer");
const helmet=require("helmet");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const rateLimit=require("express-rate-limit");
const  expressSanitizer=require("express-mongo-sanitize");
const cookieParser=require("cookie-parser");
const  path=require("path");
const  hpp=require("hpp");

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(expressSanitizer());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(hpp());
app.use(rateLimit({
    windowMs:15*60*1000,
    max:100
}))


mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Success");
}).catch((err)=> console.log(err))

app.use("/api/v1",router);

app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})

module.exports=app;