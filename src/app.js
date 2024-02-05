import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
//enable cores i.e allow http requests from CORS_ORIGIN
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//enable express to recieve json files
app.use(express.json(
    {
        limit: "64kb"
    }
))
//transfer objects inside objects
app.use(express.urlencoded({
    extended:true,
    limit: "64kb"
}))
app.use(express.static("public"))
app.use(cookieParser())




export default app;