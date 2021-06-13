// Node modules
import dotenv from "dotenv"
dotenv.config()
import express, { json } from "express"
import helmet from "helmet"
import cors from "cors"

// Imports Routes
import userRoutes from "../routes/user.js"
import authRoutes from "../routes/auth.js"

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
app.use("/api/helios/auth", authRoutes)
app.use("/api/helios/user", userRoutes)
app.all("*", (req, res, next) => {
    res.status(404).json({ message: "Wrong route" })
    next()
})

// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})