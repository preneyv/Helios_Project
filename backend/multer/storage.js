import multer, { diskStorage } from "multer"
import path from 'path'
import fs from 'fs'

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


const deleteImage = function(img) {
    var __dirname = path.resolve()
    fs.rm(`${__dirname}/temp/${img}`, (err) => {
        if (err) console.error(err)
        else console.log("Traitement de l'image ok")
    })
}

export {deleteImage}

export default multer({ storage }).single("image")
