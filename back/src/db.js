const mongoose = require("mongoose");


const dbConnection = async() =>{
    try{
        await mongoose.connect("mongodb+srv://Bruno:bruno123@cluster0.n1wctg7.mongodb.net/movies");
        console.log("Database connection successful")
    }catch(error){
        console.error("Database connection error:", error);
        throw new Error("Database connection error")
    }
}


module.exports = dbConnection;