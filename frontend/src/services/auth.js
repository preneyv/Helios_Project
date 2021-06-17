
import api, {updateApiToken} from "@/configAxios/api.js"


const AuthService = {
    signin : (data) => {
        console.log(data)
        return api.post('/auth/signin', {...data}).then(res => {
            const token = res.data.token
            localStorage.setItem("token", token)
            updateApiToken(token)

        })
    },
    signup: (data) => {
        console.log(data)
        return api.post('/auth/signup', {...data}).then( res => {
            const token = res.data.token
            localStorage.setItem("token", token)
        })
    },
    signout: () => {
        localStorage.removeItem("token")
    }
}

export default AuthService