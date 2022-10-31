const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")

const app=express()
dotenv.config()

app.use(express.json())




mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MONGODB CONNECTED")
}).catch(err=>console.log(err))


app.listen(8800,()=>console.log("app is listning 8800"))