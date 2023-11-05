import ListItem from "@components/base/ListItem";

const InfoList = ({data, title}) => {
    return (
        <div>
        <h3 className="text-4xl font-bold text-secondary">{title}</h3>
        <ol className="text-lg font-bold flex flex-col gap-6 mt-10">
            {data?.map((include, index) => <ListItem
                key={index}
                icon={data.icon && data.icon || "FaRegCheckCircle"}
                data="2 Nights accommodation at Bangkok Hotel (Twin Share Basis" />)}
        </ol>
    </div>
    );
};

export default InfoList;