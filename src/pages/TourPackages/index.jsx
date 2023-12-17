import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import { countrys } from "../../Dashboard/Pages/TourPackage";
import Searchbar from "../../components/base/SearchBar";
import { useState } from "react";


const TourPackages = () => {
    const apiUrl = 'tour-package';
    const [callApi, setCallApi] = useState(apiUrl);
    const { data, isLoading, refetch } = useData(callApi);

    return (
        <Container>
            {/* TODO  */}
            <Head title="Tour Packages | Easy Travels" />
            <Searchbar apiUrl={apiUrl} setCallApi={setCallApi} refetch={refetch} />
            <div className="flex gap-5 my-10">
                <ol className="w-4/12 flex flex-col gap-4">
                    {
                        countrys.items.map((country, index) => {
                            return <li className="p-4 text-bold shadow bg-primary text-white font-bold cursor-pointer" key={index}>{country.name}</li>
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


            {isLoading && <div className="min-h-screen">
                <LoadingSpinner />
            </div>}
        </Container>
    );
};

export default TourPackages;