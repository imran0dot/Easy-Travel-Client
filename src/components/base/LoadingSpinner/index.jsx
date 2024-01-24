import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className={`flex justify-center items-center mt-10`}>
            <Oval
                height="60"
                width="60"
                color="#002C73"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                secondaryColor='#dadde1'
            />
        </div>
    );
};

export default LoadingSpinner;