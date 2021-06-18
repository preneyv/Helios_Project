import api from "@/configAxios/api.js"

export async function getAllPost() {
    const res = await api.get("/post")
    return res
}