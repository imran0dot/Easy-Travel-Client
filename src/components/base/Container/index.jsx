const Container = ({children}) => {
    return (
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
            {children}
        </div>
    );
};

export default Container;