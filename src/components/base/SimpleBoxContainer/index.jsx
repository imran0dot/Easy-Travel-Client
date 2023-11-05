const SimpleBoxContainer = ({children}) => {
    return (
        <div  className="border p-10 bg-white">
            {children}
        </div>
    );
};

export default SimpleBoxContainer;