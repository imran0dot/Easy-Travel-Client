import comingSoonImg from "/src/assets/images/notfound.gif"
const ComingSoon = () => {
    return (
        <div className='min-h-screen flex justify-center items-center text-center border'>
            <img width="400px" src={comingSoonImg} alt="" />
            <div>
                <h2 className="text-9xl font-bold">Coming Soon</h2>
            </div>
        </div>
    );
};

export default ComingSoon;