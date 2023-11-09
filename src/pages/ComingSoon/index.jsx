import comingSoonImg from "/src/assets/images/notfound.gif"
const ComingSoon = () => {
    return (
        <div className='h-[80vh] flex justify-center flex-col md:flex-row items-center text-center border'>
            <img width="400px" src={comingSoonImg} alt="" />
            <div>
                <h2 className="text-5xl lg:text-9xl font-bold">Coming Soon</h2>
            </div>
        </div>
    );
};

export default ComingSoon;