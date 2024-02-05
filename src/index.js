import dotenv from "dotenv"
import dbConnect from "./db/index.js"
import app from "./app.js"
dotenv.config({
    path: './.env'
})
console.log(process.env.PORT)

dbConnect()
.then(()=>{
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server started ar port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`database connection failed ${err}`)
})


/*
import express from "express"
const app = express()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/