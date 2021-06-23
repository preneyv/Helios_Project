import { Router } from "express"
import { getOneById, updateUser } from "../controllers/user.js"

const router = Router()
// Route qui permettent de gérer les infos utilisateurs
//  ROUTES /api/helios/user
router.get("/:id", getOneById)
router.put("/", updateUser)

export default router