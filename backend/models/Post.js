import mongoose from "mongoose"

const { Schema, model } = mongoose

const postSchema = new Schema(
    {
        maker: Schema.ObjectId,
        content: String,
        media: String,
        link_media: Object,
        idGroup: Schema.ObjectId,
        comments: [{author:Schema.ObjectId, pseudoAuthor:String, mediaProfil: String, content:String, datePub: Date}],
        likes: [{user:Schema.ObjectId, pseudo:String}],
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "update_at" }
    }
)

export default model("Post", postSchema)