import Table from "../../Components/Table";
import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import Button from "@components/base/Button";
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
                        <Button to="add-new">Add New Package</Button>
                        <Table data={data} functions={functions} />
                    </div>
            }
        </div>
    );
};

export default StudentVisaList;