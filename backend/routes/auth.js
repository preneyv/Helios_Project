import { Router } from "express"
import { signin, signup } from '../controllers/auth.js'

const router = Router()

//  ROUTES /api/helios/auth
router.post("/signin", signin)
router.post("/signup", signup)

export default router
