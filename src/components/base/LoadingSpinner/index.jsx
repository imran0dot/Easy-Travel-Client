import { Triangle } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className={`flex justify-center items-center`}>
            <Triangle
                height="80"
                width="80"
                color="#002C73"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;