import SimpleBoxContainer from '../SimpleBoxContainer';
import SimpleHeading from '../SimpleHeading';
import { BsCloudUploadFill } from 'react-icons/bs'
import DeleteBtn from '../DeleteBtn';
import { BallTriangle } from 'react-loader-spinner';

const FileUploadInput = ({ handleChange, handleRemove, imgSrc, loading }) => {

    return (
        <div className='w-[600px]'>
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
                        <img className='w-full object-cover center' src={imgSrc.display_url} alt='image' />
                    </div> : <div>

                        <label htmlFor="image" className="w-full cursor-pointer" >
                            <div className="text-center text-7xl font-bold h-96 border flex flex-col justify-center items-center">
                                <BsCloudUploadFill />
                                Upload
                            </div>
                        </label>
                        <input onChange={handleChange} className="hidden" type="file" id="image" accept="image/*" />

                    </div>}
            </SimpleBoxContainer>
        </div>
    );
};

export default FileUploadInput;


