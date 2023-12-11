import Button from "../Button";
const ArchiveCard = ({ data }) => {
    const { featureImage, title, _id: id } = data ?? {};


    return (
        <div className="shadow-lg rounded-lg group relative bg-[#E2E8F0]">

            <div className="overflow-hidden">
                {featureImage && <img className="group-hover:scale-110 transition-all w-full object-cover" src={featureImage} alt="Easy Travel Image" />}

            </div>

            <div className="h-36 font-bold text-xl p-4">
                <p>{title}</p>
                <p className="text-lg text-slate-700">Price 3500 ৳ (dummy)</p>
            </div>

            <div className="flex flex-col justify-between w-full absolute bottom-0 left-0">
                <Button to={`${id}`}>READ MORE</Button>
            </div>
        </div>
    );
};

export default ArchiveCard;