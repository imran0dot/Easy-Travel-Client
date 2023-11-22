const SimpleBoxContainer = ({children}) => {
    return (
        <div  className="border p-10 bg-white shadow-md rounded-md w-full">
            {children}
        </div>
    );
};

export default SimpleBoxContainer;