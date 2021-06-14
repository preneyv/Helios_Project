import Axios from 'axios'


const config_url = {
    "API_URL" : "http://localhost:8800/api/helios"
}

const api = Axios.create({
    baseURL: config_url.API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
})


export const updateApiToken = token => {
    api.defaults.headers.Authorization = `Bearer ${token}`
}

export default api