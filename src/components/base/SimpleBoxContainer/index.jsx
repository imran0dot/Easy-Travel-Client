const SimpleBoxContainer = ({children}) => {
    return (
        <div  className="border p-2 overflow-hidden bg-white shadow-md rounded-3xl w-full border-x-8 border-y-0 border-secondary">
            {children}
        </div>
    );
};

export default SimpleBoxContainer;