import axios from "axios"

const fileUpload = async (image) => {
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_CLOUDINERY}/upload/image`, image);
        return data;
    }
    catch (err) {
        return err;
    }
}


export default fileUpload;