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
        password: String,
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "update_at" }
    }
)

userSchema.methods = {
    /**
     * Verify the password matches with the hash
     * @param {string} password
     * @returns
     */
    authenticate: function (password) {
        return passwordHash.verify(password, this.password)
    },

    /**
     * Create the JWT for this user
     * @returns {string}
     */
    generateAccessToken: function () {
        const payload = {
            _id: this._id,
            name: this.name,
            firstname: this.firstname,
            carPicture: generatePublicURL(this.carPicture),
            email: this.email,
            pseudo: this.pseudo
        }

        return jwt.sign(payload, process.env.TOKEN_SECRET)
    },
}

export default model("user", userSchema)
