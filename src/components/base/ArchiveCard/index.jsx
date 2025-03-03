import Button from "../Button";

const ArchiveCard = ({ data, rout }) => {
  const { featureImage, title, _id: id, price } = data ?? {};

  return (
    <div className="shadow-lg rounded-lg group relative bg-[#E2E8F0]">
      <div className="overflow-hidden">
        {featureImage && (
          <img
            className="group-hover:scale-110 transition-all w-full object-cover"
            src={featureImage}
            alt={`${title}_image`}
          />
        )}
      </div>

      <div className="h-28 font-bold text-xl p-4">
        <p>{title}</p>
        <p className="text-lg absolute top-0 bg-primary right-0 text-white px-4">
          {price} ৳
        </p>
      </div>

      <div className="flex flex-col justify-between w-full absolute bottom-0 left-0">
        <Button to={`/${rout}/${id}`}>READ MORE</Button>
      </div>
    </div>
  );
};

export default ArchiveCard;