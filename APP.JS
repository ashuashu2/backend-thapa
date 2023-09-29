require("dotenv").config()
const express = require("express");
const app =  express();
const PORT = process.env.PORT || 2100
const products_routes = require("./routes/product");
const connectDB = require("./db/connect");

app.get("/",(req,res)=>{
    res.send("hy i m home . ")
})


app.use("/api/products" , products_routes)
const start = async()=>{
    try {
        await connectDB(process.env.mongo_Pass )
        console.log("i m connected")
        app.listen(PORT,()=>{
            console.log(PORT + " i m connected with this port")

        })
    } catch (error) {
        console.log(error)
    }
}
start()
