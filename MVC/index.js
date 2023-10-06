const express= require("express")
const app=express()
const bodyParser=require("body-parser")
const bookRouter=require('./Routes/book.js')

app.use("/",bookRouter)
app.use(bodyParser.json())

app.listen(8000,()=>{console.log("Server started")})
