import Button from "../Button";
const ArchiveCard = ({ data }) => {
    const { featureImage, title, _id: id } = data ?? {};


    return (
        <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <div className="w-full h-[300px] overflow-hidden">
                <img className="group-hover:scale-110 transition-all" src={featureImage} alt="Image Loading Fail!" />
            </div>

            <div className="flex flex-col gap-3 p-10">
                <div>
                    <p className="font-bold text-3xl">{title}</p>
                </div>
                <hr />
                <div className="flex justify-between w-full">
                    <Button to={`${id}`}>READ MORE</Button>
                </div>
            </div>
        </div>
    );
};

export default ArchiveCard;