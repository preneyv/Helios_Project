import { Router } from "express"
import { 
    getAllPost,
    insertPost,
    editPost ,
    removePost, 
    insertComment, 
    removeComment, 
    updateComment, 
    addLike, 
    removeLike 
} from "../controllers/post.js"
import { authGuard } from "../guards/auth.js"

const router = Router()

router.get("/", getAllPost)
router.post('/new', /*authGuard,*/ insertPost)
router.put('/ed/:id', /*authGuard,*/ editPost)
router.delete(':id', removePost)
router.put('/:id/comment/add', insertComment)
router.put('/:id/comment/rm/:idcomment', removeComment)
router.put('/:id/comment/ed/:idcomment', updateComment)
router.put('/:id/like/add', addLike)
router.put('/:id/like/rm/:idlike', removeLike)

export default router