const PageHead = ({children}) => {
    return (
        <div className="bg-secondary h-52 flex justify-center items-center">
            <h2 className="text-6xl text-center uppercase font-bold text-white">{children}</h2>
        </div>
    );
};

export default PageHead;