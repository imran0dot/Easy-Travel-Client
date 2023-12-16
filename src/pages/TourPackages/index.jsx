import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import { countrys } from "../../Dashboard/Pages/TourPackage";


const TourPackages = () => {
    const { data, isLoading } = useData('tour-package');
    if (isLoading) return <div className="min-h-screen">
        <LoadingSpinner />
    </div>

    return (
        <Container>
            {/* TODO  */}
            <Head title="Tour Packages | Easy Travels" />
            <div className="flex gap-5 my-10">
                <ol className="w-4/12 flex flex-col gap-4">
                    {
                        countrys.items.map((country, index) => {
                            return <li className="p-4 text-bold shadow bg-primary text-white font-bold" key={index}>{country.name}</li>
                        })
                    }
                </ol>

                <div className="w-8/12">
                    {
                        data?.length !== 0 ?
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                                {data?.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                            </div> :

                            <h2 className="text-center text-4xl font-bold my-20">No Package Found Please!</h2>
                    }
                </div>
            </div>
        </Container>
    );
};

export default TourPackages;