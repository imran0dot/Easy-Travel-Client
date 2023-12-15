import Table from "../../Components/Table";
import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import Button from "@components/base/Button";
import { useContext, useState } from "react";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";

const StudentVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('student-visa');
    const { handleDeleteSinglePost, handleSubmit, title, featureImage, price, content } = useContext(FromStates);
    const [addForm, setAddForm] = useState(false);

    const functions = {
        api: "student-visa",
        handleDeleteSinglePost,
        refetch,
    }


    // FOR SUMBIT POST 
    const api = { type: "post", apiUrl: 'student-visa' };
    const postData = {
        title,
        featureImage,
        price,
        content
    }

    return (
        addForm ?

            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form
                    handleSubmit={() => handleSubmit(api, postData)}
                />
            </div>

            :

            <div>
                <Head title="Student Visa List" />
                {
                    isPending || isLoading ? <LoadingSpinner /> :
                        <div>
                            <Button onClick={() => setAddForm(true)}>Add New Package</Button>
                            <Table data={data} functions={functions} />
                        </div>
                }
            </div>
    );
};

export default StudentVisaList;