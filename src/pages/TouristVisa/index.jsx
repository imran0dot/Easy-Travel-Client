import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Searchbar from "../../components/base/SearchBar";
import { useEffect, useState } from "react";
import ClearFilter from "../../utils/clearFilter";

const TouristVisa = () => {
    const [touristVisaApi, setTouristVisaApi] = useState("tourist-visa")
    const [serachQuary, setSearchQueary] = useState("");
    const [filter, setFilter] = useState(false);
    const { data, isLoading } = useData(touristVisaApi);

    useEffect(() => {
        if (filter) {
            setSearchQueary('');
        }
        setTouristVisaApi(`tourist-visa?search=${serachQuary && serachQuary}`)
    }, [serachQuary, filter]);

    
    return (
        <div className="mt-10">
            <Head title="Tourist Visa | Easy Travels" />
            <Container>
                {/* Search bar for filter  */}
                <div>
                    <Searchbar
                        filter={filter}
                        onChange={() => setFilter(false)}
                        setSearchQueary={setSearchQueary} />

                    <ClearFilter onClick={() => setFilter(true)} />
                </div>

                {/* GIRD ITEM  */}
                <div>
                    {
                        data?.length !== 0 ?
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
                                {data?.map((listData, index) => <ArchiveCard rout={'tourist-visa'} key={index} data={listData} />)}
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