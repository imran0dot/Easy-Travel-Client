import Button from "../Button";
const ArchiveCard = ({ data }) => {
    const { featureImage, title, _id: id } = data ?? {};


    return (
        <div className="shadow-lg rounded-lg group relative bg-[#E2E8F0]">

            <div className="overflow-hidden">
                <img className="group-hover:scale-110 transition-all w-full object-cover" src={featureImage} alt="Image Loading Fail!" />
            </div>

            <div className="h-28">
                <p className="font-bold text-2xl p-4 border text-center">{title}</p>
            </div>

            <div className="flex justify-between w-full absolute bottom-0 left-0">
                <Button to={`${id}`}>READ MORE</Button>
            </div>
        </div>
    );
};

export default ArchiveCard;