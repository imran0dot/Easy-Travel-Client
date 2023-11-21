import SimpleBoxContainer from '../SimpleBoxContainer';
import SimpleHeading from '../SimpleHeading';
import { BsCloudUploadFill } from 'react-icons/bs'
import DeleteBtn from '../DeleteBtn';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const FileUploadInput = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleFeatureImageChange = (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        axios.post(`https://api.imgbb.com/1/upload/?key=${import.meta.env.VITE_IMAGE_KEY}`, formData)
            .then(res => {
                setImage(res.data);
                setLoading(false);
            })
            .catch(err => {
                toast.error('Something went wrong' + err);
                setLoading(false);
            });

    };
    return (
        <div className='w-full'>
            <SimpleBoxContainer>
                <SimpleHeading heading="Feature Image" />
                {image ? <div className='relative'>
                        <DeleteBtn className="absolute right-5 top-5" handleRemove={(e) => console.log(e)} />

                        {loading && <p>Loading..</p>}
                        <img className='w-full object-cover center' src={image?.url} alt='image' />
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


