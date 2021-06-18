import {google} from 'googleapis'
import path from 'path'
import fs from 'fs'


 async function startUpload (file) {
        const CLIENT_ID = "663254775431-hhk7pgf7gohgfseu4prleq4eedt5s7dh.apps.googleusercontent.com"
        const CLIENT_SECRET = "gCvsRYBtCmERLtHcEf4RaqLm"
        const REDIRECT_URI = "http://127.0.0.1:8080/auth/google/callback"
        
        const REFRESH_TOKEN = "1//04J12qpr0lF18CgYIARAAGAQSNwF-L9IrP3RZiRJ00ciYT9ZKBcwtDhX38hh9XsyEthq_NHUWLFGuQThL1b4QoHgnILkBycXznYw"
        
        const oAuth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        )
        
        oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
        const drive = google.drive({
            version: 'v3',
            auth: oAuth2Client
        })

        await uploadFile(file, drive)
        
}




async function uploadFile({name, type}, drive) {

    try {
        var __dirname = path.resolve()
        const filepath = path.join(__dirname, `/temp/${name}`)
        const res = await drive.files.create({
            requestBody: {
                name: name,
                mimeType: type
            },
            media: {
                mimeType: type,
                body: fs.createReadStream(filepath)
            }
        })

        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


export  {startUpload}