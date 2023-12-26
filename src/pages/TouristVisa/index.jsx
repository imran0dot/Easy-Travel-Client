import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Searchbar from "../../components/base/SearchBar";
import { useState } from "react";

const TouristVisa = () => {
    const apiUrl = 'tourist-visa';
    const { data, isLoading, refetch } = useData(apiUrl);
    return (
        <div className="mt-10">
            <Head title="Tourist Visa | Easy Travels" />
            <Container>
                {/* SEARCH BAR  */}
                <Searchbar 
                refetch={refetch} />

                {/* GIRD ITEM  */}
                <div>
                    {
                        data?.length !== 0 ?
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
                                {data?.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                            </div> :

                            <h2 className="text-center text-4xl font-bold my-20">No Package Found Please!</h2>
                    }
                </div>

                {/* LOADER  */}
                {isLoading && <div className="min-h-screen">
                    <LoadingSpinner />
                </div>}
            </Container>
        </div>
    );
};

export default TouristVisa;