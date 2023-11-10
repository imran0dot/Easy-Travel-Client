import { Link } from "react-router-dom";
import Head from "@components/base/Head";
import Table from "../../Components/Table";
import axios from "axios";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import { toast } from "react-toastify";
import useData from "../../../hooks/useData";

const TourPackageList = () => {
    const { data, refetch, isPending, isLoading } = useData('tour-package');

    const handleDelete = (id) => {
        axios.delete(`/tour-package/${id}`).then(() => {
            toast.success("Item deleted")
            refetch()
        })
    }


    return (
        <div>
            <Head title="Tour Package List" />
            {
                isPending || isLoading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-tour-package" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} handleDelete={handleDelete} />
                    </div>
            }
        </div>
    );
};

export default TourPackageList;