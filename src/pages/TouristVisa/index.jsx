import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import tourPackageList from "@/assets/data/tourPackage.json"
const TouristVisa = () => {

    return (
        <div>
            <Head title="Tourist Visa | Easy Travels" />
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {tourPackageList.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                </div>
            </Container>
        </div>
    );
};

export default TouristVisa;