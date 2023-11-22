import SimpleBoxContainer from '../SimpleBoxContainer';
import SimpleHeading from '../SimpleHeading';
import { BsCloudUploadFill } from 'react-icons/bs'
import DeleteBtn from '../DeleteBtn';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import fileConvert from '../../../utils/fileConverter';
import LoadingSpinner from '../LoadingSpinner';

const FileUploadInput = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleFeatureImageChange = (e) => {
        setLoading(true);
        const file = e.target.files[0];
        fileConvert(file).then(res => setImage(res)).catch(err => toast.error('somthing wentwrong' + err));
    };

    return (
        <div className='w-full relative'>
            <SimpleBoxContainer>
                <SimpleHeading heading="Feature Image" />

                <div>
                    {image ? <div className='relative'>
                        {loading && <div className='flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-slate-200 text-secondary font-bold bg-opacity-40'>
                            <LoadingSpinner />
                            <p>Image Uploading on Cloudinary</p>
                        </div>}
                        <DeleteBtn className="absolute right-5 top-5" handleRemove={(e) => console.log(e)} />
                        <img className='w-full object-cover center' src={image} alt='image' />
                    </div>

                        :

                        <div>

                            <label htmlFor="image" className="w-full cursor-pointer" >
                                <div className="text-center text-4xl font-bold h-96 border flex flex-col justify-center items-center">
                                    <BsCloudUploadFill />
                                    Upload
                                </div>
                            </label>
                            <input onChange={handleFeatureImageChange} className="hidden" type="file" id="image" accept="image/*" />

                        </div>}
                </div>

            </SimpleBoxContainer>
        </div>
    );
};

export default FileUploadInput;


