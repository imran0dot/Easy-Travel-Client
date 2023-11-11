import { Link } from "react-router-dom";
import Table from "../../Components/Table";
import Head from "@components/base/Head";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";

const StudentVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('student-visa');
    const { handleDeleteSinglePost } = useContext(Functions);

    const functions = {
        api: "student-visa",
        handleDeleteSinglePost,
        refetch,
    }

    return (
        <div>
            <Head title="Student Visa List" />
            {
                isPending || isLoading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-student-visa" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} functions={functions} />
                    </div>
            }
        </div>
    );
};

export default StudentVisaList;