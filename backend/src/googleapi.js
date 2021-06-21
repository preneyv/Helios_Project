import {google} from 'googleapis'
import path from 'path'
import fs from 'fs'


 async function startUpload (file) {
     console.log("Google API");
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

       const id = await uploadFile(file, drive)
       console.log("FIN : Google API");
       return id
        
}




async function uploadFile({name, type}, drive) {
    console.log("DEBUT : upload");
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

        return res.data.id

    } catch (error) {
        console.log(error)
    }
}


export  {startUpload}