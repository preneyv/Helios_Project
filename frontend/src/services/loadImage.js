import api  from "@/configAxios/api.js"

const UploadFile = function(file) {
    var formData = new FormData()
    formData.append("image", file)

    api.post('/upload', formData, function (req, res) {
        // req.file is the name of your file in the form above, here 'uploaded_file'
        // req.body will hold the text fields, if there were any 
        console.log(req.file, req.body)
     });
}

export default UploadFile


