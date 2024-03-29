import Post from '../models/Post.js'
import User from '../models/User.js'
import mongoose from "mongoose"

import {uploadFile, generatePublicURL } from "../src/googleapi.js"

import { deleteImage } from "../multer/storage.js"

const {Types} = mongoose

/*POST PART */

/**
 * Récupère toutes les publications
 * @param {express request} req 
 * @param {express response} res 
 * @returns 
 */
export async function getAllPost(req, res) {

    try {
        const posts = await Post.aggregate([])
                                .lookup(
                                    {
                                        from: "users", 
                                        let:{ makerId: "$maker"}, 
                                        pipeline: [
                                            {
                                                $match: {$expr:{$eq:["$$makerId", "$_id"]}}
                                            },
                                            {
                                                $project: {pseudo:1, link_media:1}
                                            }
                                        ], 
                                        as: "makerInfo"
                                    }
                                )
                                .sort({"created_at": -1})
        res.json({posts: posts})
    } catch (e) {
        return res.json({ error: e })
    }
}


/**
 * Enregistre l'image de l'utilisateur sur google drive
 * et ajoute l'url publique de l'image à la publication.
 * Ajoute une nouvelle publication à la base de donnée.
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le post enregistré
 */
export async function insertPost(req, res) {

    const user = req.user
    const {
        content,
        media,
        group,
    } = req.body

    try {

        const idPicture = media !== undefined ? await uploadFile(media) : null
        const linkMedia = idPicture !== null ? await generatePublicURL(idPicture) : null
        
        const post = new Post({
            maker: user._id,
            content,
            media: idPicture,
            link_media: linkMedia,
            idGroup: group,
        })
        
        post.save((err) => {
            if (err)
                return console.error(err)
        })

        if(idPicture !== null) {
            deleteImage(media.name)
        }
        return res.json({...post._doc, makerInfo: [await User.findById(post._doc.maker, {pseudo:1, link_media:1})]})
        

    } catch (e) {
        return res.status(500).send({error: e, message:"Erreur lors de l'ajout de post. Veuillez réessayer plus tard"})
    }
    
}

/**
 * Met à jour une publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification effectuée
 */
export async function editPost(req, res){
    const idPost = req.params.id
    const filter = {"_id":idPost}

    try {
        const post = await Post.updateOne(filter, {$set:{...req.body, update_at:Date.now()}})
        res.json({ found: post.n, modified: post.nModified })

    } catch (e) {
        return res.status(500).send("Erreur lors de l'edition du post. Veuillez réessayer plus tard")
    }
}


/**
 * Retire une publication de la base de donnée
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification effectuée
 */
export async function removePost(req, res) {
    const idPost = req.params.id
    const filter = {"_id":idPost}

    try {
        const post = await Post.findOneAndRemove(filter)
        res.json({ found: post.n, modified: post.nModified })
    } catch (error) {
        return res.json({ error: e })
    }
}

/*COMMENTS PART */

/**
 * Ajoute un commentaire à la publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification apportée.
 */
export async function insertComment(req, res) {
    const idPost = req.params.id
    const user = req.user
    const {content} = req.body

    const filter = {"_id":idPost}
    const body = {$push:{"comments":{author:user._id, pseudoAuthor: user.pseudo, mediaProfil: user.link_media.webContentLink, content:content, datePub: Date.now()}}}

    try {
        const post = await Post.updateOne(filter, body)
        res.json({ found: post.n, modified: post.nModified })
    } catch (error) {
        return res.json({ error: e })
    }
}

/**
 * Modifie un commentaire de l'utilisateur de la publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification apportée.
 */
export async function updateComment(req, res) {
    const idPost = req.params.id
    const idComment = Types.ObjectId(req.params.idcomment)

    const {content} = req.body

    const filter = {"_id":idPost, "comments._id":idComment}
    const body = {$set:{"comments.$.content":content}}

    try {
        const post = await Post.updateOne(filter, body)
        res.json({ found: post.n, modified: post.nModified })
    } catch (e) {
        return res.json({ error: e })
    }
}

/**
 * Retire un commentaire de l'utilisateur de la publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification apportée.
 */
export async function removeComment(req, res) {
    const idPost = req.params.id
    const idComment = req.params.idcomment
    
    const filter = {"_id":idPost}
    const body = {$pull:{"comments":{"_id":idComment}}}
    try {
        const post = await Post.updateOne(filter, body)
        res.json({ found: post.n, modified: post.nModified })
    } catch (e) {
        return res.json({ error: e })
    }


}

/* LIKE PART*/
/**
 * Ajoute un "like" de l'utilisateur à la publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification apportée.
 */
export async function addLike(req, res) {
    const idPost = req.params.id
    const user = req.user

    const idUser = user._id
    const filter = {"_id":idPost}
    const body = {$push:{"likes":{user:user._id, pseudo:user.pseudo}}}

    try {
        const post = await Post.updateOne(filter, body)
        res.json({ modifiedPost: post.nModified })
    } catch (e) {
        return res.json({ error: e })
    }
    
}


/**
 * Retire le "like" de l'utilisateur de la publication
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le nombre de modification apportée.
 */
export async function removeLike(req, res) {
    const idPost = req.params.id
    const idUser = req.user._id
    
    const filter = {"_id":idPost}
    const body = {$pull:{"likes":{"user":idUser}}}
    try {
        const post = await Post.updateOne(filter, body)
        res.json({ modifiedPost: post.nModified })
    } catch (e) {
        return res.json({ error: e })
    }


}