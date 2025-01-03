import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { authUser, change_password, create_otp, loginUser, logout, register, verifyEmail, verifyOtp } from "./controller/authController.js";
import {protect} from './middleware/authentication_middleware.js'
import dotenv from 'dotenv'
dotenv.config()

//import { protect } from './middleware/auth_middleware.js'


const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Cookies
app.use(cookieParser())

//cors
app.use(cors({
    origin: 'https://prodigy-fs-01-frontend.vercel.app',
    credentials: true
}))



//ROUTES

app.post('/register', register)
app.get("/getUser", protect, authUser)
app.put("/verifyOtp", verifyOtp)
app.put("/changePassword", change_password)
app.post("/verifyEmail", verifyEmail)
app.post('/createOtp', create_otp)
app.post("/login", loginUser)
app.post('/logout', logout)


mongoose.connect(process.env.MONGO_URL).then(() => {

    console.log("connected to the database...");

    app.listen(8080, () => {

        console.log('server is listening at port 8080....');
    })

}).catch((err) => {

    console.log('Failed to connect to the database!', err);
})

app.get("/", (req, res) => {
    res.json("Hello")
})


/*//handles file uploads, documents etc
app.post("/upload", ExpressFormidable({ maxFieldsSize: 5 * 2024 * 2024 }), uploadImage)
*/
