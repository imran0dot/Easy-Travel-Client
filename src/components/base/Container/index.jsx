const Container = ({children}) => {
    return (
        <div className="max-w-[90%] md:max-w-[800px] lg:max-w-[1200px] mx-auto">
            {children}
        </div>
    );
};

export default Container;