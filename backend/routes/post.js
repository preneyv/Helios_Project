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
router.post('/new', authGuard, insertPost)
router.put('/ed/:id', authGuard, editPost)
router.delete(':id', authGuard, removePost)
router.put('/:id/comment/add', authGuard, insertComment)
router.put('/:id/comment/rm/:idcomment', authGuard, removeComment)
router.put('/:id/comment/ed/:idcomment', authGuard, updateComment)
router.put('/:id/like/add', authGuard, addLike)
router.put('/:id/like/rm/:idlike', authGuard, removeLike)

export default router