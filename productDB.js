require("dotenv").config()
const newProduct = require("./models/product");
const connectDB = require("./db/connect");
const productJson = require("./products.json")

const start = async()=>{

    try {
        await connectDB(process.env.mongo_Pass);
        console.log("i m connected to server");
        await newProduct.deleteMany();
        console.log("delete product from server");


        await newProduct.create(productJson);
        console.log("i m succesfully added product to server ");

        
    } catch (error) {
        console.log(error)
        
    }
}
start()