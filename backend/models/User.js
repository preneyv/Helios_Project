import mongoose from "mongoose"
import passwordHash from "password-hash"
import jwt from "jsonwebtoken"
import { generatePublicURL } from "../src/googleapi.js"

const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        pseudo: String,
        firstname: String,
        birthDate: String,
        name: String,
        email: String,
        state: {type:String, default:"en attente"},
        carPicture: String,
        link_media: Object,
        password: String,
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "update_at" }
    }
)

userSchema.methods = {
    /**
     * Vérifie le chiffrement du password
     * @param {string} password
     * @returns
     */
    authenticate: function (password) {
        return passwordHash.verify(password, this.password)
    },

    /**
     * Crée le jeton de connexion
     * @returns {string}
     */
    generateAccessToken: function () {
        const payload = {
            _id: this._id,
            name: this.name,
            firstname: this.firstname,
            email: this.email,
            link_media: this.link_media,
            pseudo: this.pseudo
        }

        return jwt.sign(payload, process.env.TOKEN_SECRET)
    },
}

export default model("user", userSchema)
