
import { Router } from "express"
import upload from "../multer/storage.js"

const router = Router()

//Route pour enregistrer l'image du post ou du user dans le dossier /temp
// Route : /api/helios/upload
router.post("/", upload)

export default router