import jwt from 'jsonwebtoken'

export  function isImage(filename) {

        const validext = ["jpg","png","jpeg","svg"]
        const tabofstring = filename.split(".")
        const ext = tabofstring[tabofstring.length-1]
        return validext.includes(ext)

}

export function getUserInfos() {

        if (localStorage.getItem('token'))
                return jwt.decode(localStorage.getItem('token'))

        return null
}