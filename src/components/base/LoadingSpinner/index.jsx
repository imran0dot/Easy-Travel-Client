import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className={`flex justify-center items-center`}>
            <Oval
                height="80"
                width="80"
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