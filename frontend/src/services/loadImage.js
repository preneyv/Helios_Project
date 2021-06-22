import api  from "@/configAxios/api.js"

const UploadFile = async function(file) {
    var formData = new FormData()
    formData.append("image", file)

    const res = await api.post('/upload', formData);
    return res
}

export default UploadFile


