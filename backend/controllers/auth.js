import User from "../models/User.js"
import passwordHash from "password-hash"
import fs from 'fs'

/**
 * Login user from the database and generate a JWT
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
 * Create a user and insert it into the database
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
        const user = new User({
            pseudo,
            firstname,
            birthDate,
            name,
            email,
            carPicture:{title: `carpicture-${pseudo}`, data:fs.readFileSync(carPicture)},
            password: passwordHash.generate(password),
        })

        user.save((error) => {
            if (error)
                throw new Error(error)

            const token = user.generateAccessToken()
            return res.status(200).json({ token })
        })
    } catch (error) {
        return res.status(500).json({ message: `${error}` })
    }
}
