import InfoList from "@components/base/InfoList"

const PackageInfo = ({data}) => {
    return (
        <div className="flex flex-col gap-10 shadow-md p-10 rounded-md justify-between lg:w-8/12 border">
            <InfoList data={data} title="Package price includes:-" />
            <InfoList data={data} title="Package price excludes:-" />
        </div>
    );
};

export default PackageInfo;