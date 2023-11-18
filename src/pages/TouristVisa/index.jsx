import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";

const TouristVisa = () => {
    const { data, isLoading } = useData('tourist-visa');
    if (isLoading) return <div className="min-h-screen">
        <LoadingSpinner />
    </div>
    return (
        <div>
            <Head title="Tourist Visa | Easy Travels" />
            <Container>
                {
                    data?.length !== 0 ?
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                            {data?.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                        </div> :

                        <h2 className="text-center text-4xl font-bold my-20">No Package Found Please!</h2>
                }
            </Container>
        </div>
    );
};

export default TouristVisa;