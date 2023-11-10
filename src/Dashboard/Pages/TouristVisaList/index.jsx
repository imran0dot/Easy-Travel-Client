import { Link } from "react-router-dom";
import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Table from "../../Components/Table";
import useData from "../../../hooks/useData";

const TouristVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('tour-package');
    return (
        <div>
             <Head title="Tourist Visa List" />
            {
                isPending || isLoading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-tour-package" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} />
                    </div>
            }
        </div>
    );
};

export default TouristVisaList;