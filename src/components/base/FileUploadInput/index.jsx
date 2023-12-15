import SimpleBoxContainer from '../SimpleBoxContainer';
import SimpleHeading from '../SimpleHeading';
import { BsCloudUploadFill } from 'react-icons/bs'
import DeleteBtn from '../DeleteBtn';
import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const FileUploadInput = ({ imgSrc, setFeatureImage, handleChange, handleRemove }) => {
    const [loading, setLoading] = useState(false);
    if(imgSrc){
        setFeatureImage(imgSrc)
    }
    return (
        <div className='w-full relative'>
            <SimpleBoxContainer>
                <div className='min-h-96'>
                    <SimpleHeading heading="Feature Image" />
                    {imgSrc ? <div className='relative'>
                        {/* TODO */}
                        <DeleteBtn className="absolute right-5 top-5" handleRemove={handleRemove} />

                        <img className='w-full object-cover center' src={imgSrc} alt='image' />
                    </div> : <div>
                        {loading ?

                            <div className='flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-slate-200 text-secondary font-bold bg-opacity-40 min-h-[200px]'>
                                <LoadingSpinner />
                                <p>Image Uploading on Cloudinary</p>
                            </div> :

                            <div>
                                <label htmlFor="image" className="w-full cursor-pointer" >
                                    <div className="text-center text-4xl font-bold h-96 border flex flex-col justify-center items-center">
                                        <BsCloudUploadFill />
                                        Upload
                                    </div>
                                </label>
                                <input onChange={(e) => handleChange(e, setLoading)} className="hidden" type="file" id="image" accept="image/*" />
                            </div>}
                    </div>}
                </div>
            </SimpleBoxContainer>
        </div>
    );
};

export default FileUploadInput;


