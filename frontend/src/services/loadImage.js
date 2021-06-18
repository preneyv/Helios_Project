import api  from "@/configAxios/api.js"
var multer  = require('multer')


const UploadFile = function() {
    var upload = multer({ dest: '../../../backend/temp/' })
    api.post('/upload', upload.single('carPicture'), function (req, res) {
        // req.file is the name of your file in the form above, here 'uploaded_file'
        // req.body will hold the text fields, if there were any 
        console.log(req.file, req.body)
     });
}

export default UploadFile


