import Post from '../models/Post.js'
import mongoose from "mongoose"

import {uploadFile, generatePublicURL } from "../src/googleapi.js"

import { deleteImage } from "../multer/storage.js"

const {Types} = mongoose

/*POST PART */

export async function getAllPost(req, res) {

    try {
        const posts = await Post.find({}).sort({"created_at": -1})

        for(var i = 0; i < posts.length; i++) {
            if(posts[i].media !== null) 
                posts[i] =  {...posts[i]._doc, link_media: await generatePublicURL(posts[i].media) }
        }

        
        res.json({posts: posts})
    } catch (e) {
        return res.json({ error: e })
    }
}
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns le post enregistre
 */
export async function insertPost(req, res) {

    const user = req.user
    const {
        content,
        media,
        group,
    } = req.body
    console.log(req.body)

    try {
        console.log(media)
        const idPicture = media !== undefined ? await uploadFile(media) : null
        
        const post = new Post({
            maker: user._id,
            content,
            media: idPicture,
            idGroup: group,
        })
        
        post.save((err) => {
            if (err)
                return console.error(err)

            if(idPicture !== null)deleteImage(media.name)
            return res.json(post)
        })

    } catch (e) {
        return res.status(500).send({error:"Erreur lors de l'ajout de post. Veuillez réessayer plus tard"})
    }
    
}

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
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns 
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
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function insertComment(req, res) {
    const idPost = req.params.id
    const user = req.user

    const {content} = req.body

    const filter = {"_id":idPost}
    const body = {$push:{"comments":{author:user._id, content:content, datePub: Date.now()}}}

    try {
        const post = await Post.updateOne(filter, body)
        res.json({ found: post.n, modified: post.nModified })
    } catch (error) {
        return res.json({ error: e })
    }
}

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
export async function addLike(req, res) {
    const idPost = req.params.id
    const user = req.user

    const idUser = user._id
    const filter = {"_id":idPost}
    const body = {$push:{"likes":{user:user._id, pseudo:user.pseudo}}}

    try {
        const post = await Post.findOneAndUpdate(filter, body, {new:true})
        console.log(post)
        res.json({ modifiedPost: post })
    } catch (e) {
        return res.json({ error: e })
    }
    
}


export async function removeLike(req, res) {
    const idPost = req.params.id
    const idLike = req.params.idlike
    
    const filter = {"_id":idPost}
    const body = {$pull:{"likes":{"_id":idLike}}}
    try {
        const post = await Post.findOneAndUpdate(filter, body, {new:true})
        console.log(post)
        res.json({ modifiedPost: post })
    } catch (e) {
        return res.json({ error: e })
    }


}