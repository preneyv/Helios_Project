
import { Router } from "express"
import upload from "../multer/storage.js"

const router = Router()

router.post("/", upload)

export default router