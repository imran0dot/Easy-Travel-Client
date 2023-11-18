import SimpleBoxContainer from '../SimpleBoxContainer';
import SimpleHeading from '../SimpleHeading';
import { BsCloudUploadFill } from 'react-icons/bs'
import DeleteBtn from '../DeleteBtn';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const FileUploadInput = ({ handleRemove, imgSrc }) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const handleFeatureImageChange = (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        formData.append("upload_preset", import.meta.env.VITE_PRESET)
        
        axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD}/image/upload`, formData)
        .then(res => setImage(res.data.secure_url))
        .catch(err => toast.error('somthing went wrong' + err));

        // axios.post(import.meta.env.VITE_HOST_KEY, formData)
        //     .then(res => {
        //         const data = res.data.data;
        //         const imgData = {
        //             display_url: data.display_url,
        //             delete_url: data.delete_url,
        //         }
        //         localStorage.setItem('img', JSON.stringify(imgData));
        //         setFeatureImage(imgData);
        //         setLoading(false)
        //     })

        setLoading(false);
    }
    return (
        <div className='w-full'>
            <SimpleBoxContainer>
                <SimpleHeading heading="Feature Image" />
                {imgSrc?.display_url ?
                    <div className='relative'>
                        <DeleteBtn className="absolute right-5 top-5" handleRemove={handleRemove} />
                        {loading && <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-secondary bg-opacity-60'>
                            <BallTriangle
                                height={100}
                                width={100}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />
                        </div>}
                        <img className='w-full object-cover center' src={image} alt='image' />
                    </div> : <div>

                        <label htmlFor="image" className="w-full cursor-pointer" >
                            <div className="text-center text-4xl font-bold h-96 border flex flex-col justify-center items-center">
                                <BsCloudUploadFill />
                                Upload
                            </div>
                        </label>
                        <input onChange={handleFeatureImageChange} className="hidden" type="file" id="image" accept="image/*" />

                    </div>}
            </SimpleBoxContainer>
        </div>
    );
};

export default FileUploadInput;


