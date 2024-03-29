import User from "../models/User.js"
import passwordHash from "password-hash"
import { uploadFile, generatePublicURL } from "../src/googleapi.js"

import { deleteImage } from "../multer/storage.js"

/**
 * Connecte et génère un jeton d'accés. Rendant la connexion unique
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
export async function signin(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res
            .status(403)
            .json({ message: `Formulaire invalide` })
    }

    const user = await User.findOne({ email })
    if (!user || !passwordHash.verify(password, user.password)) {
        return res
            .status(403)
            .json({ message: `Email ou mot de passe invalide` })
    }

    const token = user.generateAccessToken()
    return res.json({ token })
}

/**
 * Crée un utilisateur et génère un jeton d'accés. Rendant la connexion unique.
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
export async function signup(req, res) {
    const { 
        pseudo, 
        firstname, 
        birthDate, 
        name, 
        email, 
        carPicture,
        password } = req.body
        console.log(req.body)

    if (
            !pseudo || !firstname || 
            !birthDate || !name || 
            !email || 
            !carPicture || !password
        ) {
        return res
            .status(403)
            .json({ message: `Formulaire invalide` })
    }

    const isEmailTaken = (await User.find({ email })).length !== 0

    if (isEmailTaken) {
        return res
            .status(403)
            .json({ message: `Email déjà associé à un compte` })
    }

    try {
        
        const idPicture = await uploadFile(carPicture)
        const linkMedia = await generatePublicURL(idPicture) 

        const user = new User({
            pseudo,
            firstname,
            birthDate,
            name,
            email,
            carPicture: idPicture,
            link_media: linkMedia,
            password: passwordHash.generate(password),
        })

        user.save((error) => {
            if (error)
                throw new Error(error)

            deleteImage(carPicture.name)
            const token = user.generateAccessToken()
            return res.status(200).json({ token })
        })
    } catch (error) {
        return res.status(500).json({ message: `Erreur en base de données. Veuillez réessayer.` })
    }
}
