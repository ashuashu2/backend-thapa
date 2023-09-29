
const mongoose = require("mongoose");


const connectDB = (uri)=>{
    console.log("i m database")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology : true,
        
    })
    
}

module.exports = connectDB