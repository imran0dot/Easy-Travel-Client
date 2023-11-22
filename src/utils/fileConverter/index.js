const fileConvert = (file) => {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
        try {
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
        }
        catch (err) {
            reject.throw(err);
        }
    })
}

export default fileConvert;