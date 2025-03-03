import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "@components/base/LoadingSpinner";
import { countrys } from "../../Dashboard/Pages/TourPackage";
import Searchbar from "../../components/base/SearchBar";
import { useEffect, useState } from "react";
import CategoryFilter from "../../components/base/CategoryFilter";
import ClearFilter from "../../utils/clearFilter";


const TourPackages = () => {
    const [tourPackageApi, setTourpackageAPi] = useState("tour-package")
    const [serachQuary, setSearchQueary] = useState("");
    const [countryQuery, setCountryQueary] = useState("");
    const { data, isLoading } = useData(tourPackageApi);
    const [filter, setFilter] = useState(false);

    // conuntry Handle change 
    const handleCountryChange = (e) => {
        const countryValue = e.target.value.toLowerCase();
        const spliceValue = countryValue.split(" ").join("-");
        setFilter(false);

        if (spliceValue === "all-country") {
            setCountryQueary("")
        } else {
            setCountryQueary(countryValue)
        }
    }

    useEffect(() => {
        if (filter) {
            setSearchQueary('');
            setCountryQueary('');
        }
        setTourpackageAPi(`tour-package?search=${serachQuary && serachQuary}&&country=${countryQuery && countryQuery}`)
    }, [countryQuery, serachQuary, filter])


    return (
        <Container>
            {/* TODO  */}
            <Head title="Tour Packages | Easy Travels" />
            <div className="grid md:grid-cols-2 justify-center items-center gap-10 w-full mt-10">
                {/* Country Items filter  */}
                <CategoryFilter
                    filter={filter}
                    onChange={handleCountryChange}
                    categorys={countrys} />

                {/* Search bar for filter  */}
                <Searchbar
                    filter={filter}
                    onChange={() => setFilter(false)}
                    setSearchQueary={setSearchQueary} />

            </div>
            
            <ClearFilter onClick={() => setFilter(true)} />


            {/* LIST ITEMS  */}
            <div className="w-full mt-10">
                {
                    data?.length !== 0 ?
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {data?.map((listData, index) => <ArchiveCard rout={'tour-package'} key={index} data={listData} />)}
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