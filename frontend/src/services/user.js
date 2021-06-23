import api from "@/configAxios/api.js"

export async function updateUser(data) {

    const res = await api.put("/user", {...data} )
    return res
}