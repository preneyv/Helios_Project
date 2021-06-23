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
import uploadRoutes from "../routes/upload.js"


//Import DB
import database from "./database.js"

const app = express()

// Connexion à MongoDB
database.init()

// Le port écouté
const port = process.env.PORT || 8800

// Middlewares
app.use(helmet())
app.use(json())
app.use(cors({
    origin: "*"
}))



// Routes
app.use("/api/helios/auth", authRoutes)
app.use("/api/helios/user", userRoutes)
app.use("/api/helios/post", postRoutes)
app.use("/api/helios/upload", uploadRoutes)

app.all("*", (req, res, next) => {
    res.status(404).json({ message: "Wrong route" })
    next()
})

// Démarre le serveur
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})