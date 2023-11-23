import axios from "axios";

const fileUpload = (image) => {
  return new Promise((resolve, reject) => {
    const imageWarpt = new FormData();
    imageWarpt.append('image', image);
    
    axios.post('image-upload', imageWarpt)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fileUpload;