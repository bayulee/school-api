const express=require("express")
const morgan=require("morgan")
require("dotenv").config();
const connectDB=require("./config/connectDB")
const userRoutes=require("./routes/userRoute")

const app=express()
connectDB()

//MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"))
app.use("/user",userRoutes)


//home route
app.get("/",(req,res)=>{
   res.json("<h1>WELCOME TO OUR SCHOOL API</h1>")
})
const PORT = process.env.PORT||7000;

app.listen(PORT, ()=>{
console.log("SERVER IS UP!")
})