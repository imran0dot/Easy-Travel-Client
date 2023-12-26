import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import { countrys } from "../../Dashboard/Pages/TourPackage";
import Searchbar from "../../components/base/SearchBar";
import { useState } from "react";
import CategoryFilter from "../../components/base/CategoryFilter";
import ClearFilter from "../../utils/clearFilter";


const TourPackages = () => {
    const apiUrl = 'tour-package';
    const [callApi, setCallApi] = useState(apiUrl);
    const { data, isLoading, refetch } = useData(callApi);

    return (
        <Container>
            {/* TODO  */}
            <Head title="Tour Packages | Easy Travels" />
            <div className="grid md:grid-cols-2 justify-center items-center gap-10 w-full mt-10">
                <CategoryFilter categorys={countrys} refetch={refetch} />
                <Searchbar apiUrl={apiUrl} setCallApi={setCallApi} refetch={refetch} />
            </div>
            <ClearFilter apiUrl={apiUrl} setCallApi={setCallApi}/>


            {/* LIST ITEMS  */}
            <div className="w-full mt-10">
                {
                    data?.length !== 0 ?
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {data?.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                        </div> :

                        <h2 className="text-center text-4xl font-bold my-20">No Package Found Please!</h2>
                }
            </div>


            {isLoading && <div className="min-h-screen">
                <LoadingSpinner />
            </div>}
        </Container>
    );
};

export default TourPackages;