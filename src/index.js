// require('dotenv').config({path:'./env'}) 
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// --------------- APPROACH 2 -------------------

dotenv.config({
    path:'.env'
})
connectDB()











/*  --------------------  APPROACH 1 --------------

import express from "express";
const app=express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()

*/