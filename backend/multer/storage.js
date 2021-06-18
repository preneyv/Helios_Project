import multer, { diskStorage } from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var __dirname = path.resolve()
        cb(null, `${__dirname}/temp`)
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(
            null,
            file.originalname
        )
    },
})

export default multer({ storage }).single("image")