import { Link } from "react-router-dom";
import Head from "@components/base/Head";
import Table from "../../Components/Table";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";

const TourPackageList = () => {
    const { data, refetch, isPending, isLoading } = useData('tour-package');
    const { handleDeleteSinglePost } = useContext(Functions)

    const functions = {
        api: "tour-package",
        handleDeleteSinglePost,
        refetch,
    }


    return (
        <div>
            <Head title="Tour Package List" />
            {
                isPending || isLoading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-tour-package" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} functions={functions} />
                    </div>
            }
        </div>
    );
};

export default TourPackageList;