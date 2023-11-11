import Button from "../Button";
const ArchiveCard = ({ data }) => {
    const { featureImage, title, _id: id } = data ?? {};


    return (
        <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <div className="w-full h-[300px] overflow-hidden">
                <img className="group-hover:scale-110 transition-all" src={featureImage?.display_url} alt="Image Loading Fail!" />
                <p className=" bg-secondary text-white absolute top-5 right-5 px-3 py-1 rounded-md">1 Week</p>
            </div>

            <div className="flex flex-col gap-3 p-10">
                <h3>Chiang Mai</h3>
                <div>
                    <p className="font-bold text-3xl">{title}</p>
                </div>
                <hr />
                <p>Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on Chiang Klan Road.</p>
                <hr />
                <div className="flex justify-between items-center">
                    <div>
                        <p>From</p>
                        <p className="font-bold text-2xl">$300</p>
                    </div>
                    <Button to={`${id}`}>Details</Button>
                </div>
            </div>
        </div>
    );
};

export default ArchiveCard;