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
import { useLocation, useNavigate } from "react-router-dom";


const TourPackages = () => {
    const [tourPackageApi, setTourpackageAPi] = useState("tour-package")
    const [serachQuary, setSearchQueary] = useState("");
    const [countryQuary, setCountryQueary] = useState("");
    const navigate = useNavigate();
    let location = useLocation();
    let searchParams = new URLSearchParams(location.search);

    let searchValue = searchParams.get('search');
    let countryValue = searchParams.get('country');


    const { data, isLoading, refetch } = useData(tourPackageApi);


    // conuntry Handle change 

    const handleCountryChange = (e) => {
        const countryValue = e.target.value.toLowerCase();
        const spliceValue = countryValue.split(" ").join("-");
        if (spliceValue === "all-country") {
            navigate(`?search=${serachQuary}`);
            setTourpackageAPi(`tour-package?search=${searchValue && searchValue }`)
        } else {
            navigate(`?search=${serachQuary}&&country=${countryValue}`)
            setTourpackageAPi(`tour-package?search=${searchValue}&&country=${countryValue}`)
        }
        refetch();
    }

    useEffect(() => {
    }, [serachQuary, countryQuary])


    return (
        <Container>
            {/* TODO  */}
            <Head title="Tour Packages | Easy Travels" />
            <div className="grid md:grid-cols-2 justify-center items-center gap-10 w-full mt-10">
                {/* Country Items filter  */}
                <CategoryFilter
                    onChange={handleCountryChange}
                    categorys={countrys}
                    refetch={refetch} />

                {/* Search bar for filter  */}
                <Searchbar
                    setSearchQueary={setSearchQueary}
                    refetch={refetch} />

            </div>
            <ClearFilter />


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