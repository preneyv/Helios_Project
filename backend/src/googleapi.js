import {google} from 'googleapis'
import path from 'path'
import fs from 'fs'

/**
 * Permet de générer une connexion vers le répertoire de sauvegarde des images google drive
 * @returns l'accés au drive
 */
 function initAuth () {
        const CLIENT_ID = "663254775431-hhk7pgf7gohgfseu4prleq4eedt5s7dh.apps.googleusercontent.com"
        const CLIENT_SECRET = "gCvsRYBtCmERLtHcEf4RaqLm"
        const REDIRECT_URI = "https://developers.google.com/oauthplayground/"
        
        const REFRESH_TOKEN = "1//04TRnLh88YXqqCgYIARAAGAQSNwF-L9Ir5pTSW_DW0q96OISakFeXBOT6TQfqI4GtaBkc36c1Ya8dEpDAdGtBMbXHOv0yoksNCXw"
        
        const oAuth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        )
        
        oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
        const drive = google.drive({
            version: 'v3',
            auth: oAuth2Client,
            
        })

       return drive
        
}

/**
 * Crée une url publique pour l'image
 * @param {*} idFile id de l'image dans google drive
 * @returns objet contenant deux url publiques de l'image
 */
async function generatePublicURL(idFile) {
    const drive = initAuth()
    const result = await drive.files.get({
        fileId:idFile, 
        fields: "webViewLink, webContentLink"
    })
    return result.data
}

/**
 * Enregistre l'image dans google drive
 * @param {*} file 
 * @returns l'id de l'image dans google drive
 */
async function uploadFile(file) {

    const drive = initAuth()
    const {name, type} = file

    
    try {
        var __dirname = path.resolve()
        const filepath = path.join(__dirname, `/temp/${name}`)
        const res = await drive.files.create({
            requestBody: {
                name: name,
                mimeType: type,
                parents:["1PK0H6WMpePcygdY3LW9b4MkUa1ItRbxG"]
            },
            media: {
                mimeType: type,
                body: fs.createReadStream(filepath)
            }
        })

        await drive.permissions.create({
            fileId: res.data.id,
            requestBody: {
                role: 'reader',
                type: "anyone"
            }
        })

        return res.data.id

    } catch (error) {
        console.log(error)
    }
}


export  {uploadFile, generatePublicURL}