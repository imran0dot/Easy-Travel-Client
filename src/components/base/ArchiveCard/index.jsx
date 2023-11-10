import packageImg from "@/assets/images/para.jpg"
import Button from "../Button";
const ArchiveCard = ({data}) => {
    const {id, packageName, includes, excludes, options, price } = data;
    const fromPrice = Object.values(price[0])[0] !== "" && Object.values(price[0])[0] || Object.values(price[0])[1];

    return (
        <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <div className="w-full h-[300px] overflow-hidden">
                <img className="group-hover:scale-110 transition-all" src={packageImg} alt="" />
                <p className=" bg-secondary text-white absolute top-5 right-5 px-3 py-1 rounded-md">1 Week</p>
            </div>

            <div className="flex flex-col gap-3 p-10">
                <h3>Chiang Mai</h3>
                <div>
                    <p className="font-bold text-3xl">{packageName}</p>
                </div>
                <hr />
                <p>Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on Chiang Klan Road.</p>
                <hr />
                <div className="flex justify-between items-center">
                    <div>
                        <p>From</p>
                        <p className="font-bold text-2xl">${fromPrice}</p>
                    </div>
                    <Button to={`/tour-packages/${id}`}>Details</Button>
                </div>
            </div>
        </div>
    );
};

export default ArchiveCard;