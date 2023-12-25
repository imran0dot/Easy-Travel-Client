const SimpleBoxContainer = ({children}) => {
    return (
        <div  className="border p-10 bg-white shadow-md rounded-3xl w-full border-x-8 border-y-0 border-secondary">
            {children}
        </div>
    );
};

export default SimpleBoxContainer;