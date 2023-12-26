import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Searchbar from "../../components/base/SearchBar";
import { useState } from "react";


const StudentVisa = () => {
    const apiUrl = 'study-abroad';
    const [serachQuary, setSearchQueary] = useState("");
    const [filter, setFilter] = useState(false);

    const { data, isLoading, refetch } = useData(apiUrl);




    return (
        <div className="mt-10">
            <Head title="Study Abroad | Easy Travels" />
            <Container>
                {/* SEARCH BAR  */}
                <Searchbar
                    filter={filter}
                    onChange={() => setFilter(false)}
                    setSearchQueary={setSearchQueary} />

                {/* LIST ITEMS  */}
                <div>
                    {
                        data?.length !== 0 ?
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
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

export default StudentVisa;