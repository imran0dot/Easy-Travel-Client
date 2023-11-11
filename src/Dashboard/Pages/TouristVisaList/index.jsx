import { Link } from "react-router-dom";
import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Table from "../../Components/Table";
import useData from "../../../hooks/useData";
import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";

const TouristVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('tourist-visa');

    const { handleDeleteSinglePost } = useContext(Functions)

    const functions = {
        api: "tourist-visa",
        handleDeleteSinglePost,
        refetch,
    }

    return (
        <div>
             <Head title="Tourist Visa List" />
            {
                isPending || isLoading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-tourist-visa" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} functions={functions} />
                    </div>
            }
        </div>
    );
};

export default TouristVisaList;