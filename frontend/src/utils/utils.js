export  function isImage(filename) {

        const validext = ["jpg","png","jpeg","svg"]
        const tabofstring = filename.split(".")
        const ext = tabofstring[tabofstring.length-1]
        return validext.includes(ext)

}