import { Router } from "express"
import { getOneById, updateUser } from "../controllers/user.js"

const router = Router()

//  ROUTES /api/v1/user
router.get("/:id", getOneById)
router.put("/:id", updateUser)

export default router