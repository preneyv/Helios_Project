// Node modules
import dotenv from "dotenv"
dotenv.config()
import express, { json } from "express"
import helmet from "helmet"
import cors from "cors"


// Imports Routes
import userRoutes from "../routes/user.js"
import authRoutes from "../routes/auth.js"
import postRoutes from "../routes/post.js"

import { uploadImage } from "../controllers/uploadImage.js"
import upload from "../multer/storage.js"

//Import DB
import database from "./database.js"

const app = express()

// Connect to MongoDB
database.init()

// Port Listening
const port = process.env.PORT || 8800

// Global middlewares
app.use(helmet())
app.use(json())
app.use(cors())



// Routes
app.post("/api/helios/upload", upload)
app.use("/api/helios/auth", authRoutes)
app.use("/api/helios/user", userRoutes)
app.use("/api/helios/post", postRoutes)

app.all("*", (req, res, next) => {
    res.status(404).json({ message: "Wrong route" })
    next()
})

// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})