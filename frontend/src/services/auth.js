import Axios from 'axios'
import api, {updateApiToken} from "@/configAxios/api"


const AuthService = {
    signin : (email, password) => {
        return api.post('/auth/signin', {email, password}).then(res => {
            const token = response.data.token
            updateApiToken(token)

        })
    },
    signup: () => {

    },
    signout: () => {
        localStorage.removeItem("token")
    }
}

export default AuthService