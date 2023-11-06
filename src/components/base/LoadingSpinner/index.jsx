import { Blocks } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className='absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
};

export default LoadingSpinner;