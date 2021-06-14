import Axios from 'axios'
import api, {updateApiToken} from "@/configAxios/api"


const AuthService = {
    signin : (email, password) => {
        return api.post('/auth/signin', {email, password}).then(res => {
            const token = response.data.token
            localStorage.setItem("token", token)
            updateApiToken(token)

        })
    },
    signup: (pseudo, firstname, name, password, email, birthDate, carPicture) => {

        return api.post('/auth/signup', {pseudo, firstname, name, password, email, birthDate, carPicture}).then( res => {
            const token = response.data.token
            localStorage.setItem("token", token)
        })
    },
    signout: () => {
        localStorage.removeItem("token")
    }
}

export default AuthService