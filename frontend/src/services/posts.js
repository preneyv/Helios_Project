import api from "@/configAxios/api.js"

export async function getAllPost() {
    const res = await api.get("/post")
    return res
}

export async function insertOnePost(data) {
    const res = await api.post("/post/new", {...data})
    return res
}