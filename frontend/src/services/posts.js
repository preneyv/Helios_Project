import api from "@/configAxios/api.js"

export async function getAllPost() {
    const res = await api.get("/post")
    console.log(res)
    return res
}

export async function insertOnePost(data) {
    const res = await api.post("/post/new", {...data})
    return res
}

export async function likePost(idPost) {
    const res = await api.put(`/post/${idPost}/like/add`)
    return res
}


export async function unLikePost(idPost, idLike) {
    const res = await api.put(`/post/${idPost}/like/rm/${idLike}`)
    return res
}

export async function commentPost(idPost, data) {
    const res = await api.put(`/post/${idPost}/comment/add`, {...data})
    return res
}
