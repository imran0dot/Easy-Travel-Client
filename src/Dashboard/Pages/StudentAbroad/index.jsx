import Table from "../../Components/Table";
import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import Button from "@components/base/Button";
import { useContext, useState } from "react";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";
import UpdatePost from "../updatePost";
import getParams from "../../../utils/getParams";
import urlCreate from "../../../utils/getUrlForSubmit";
import { countrys } from "../TourPackage";

const StudentAbroad = () => {
    const { data, refetch, isPending, isLoading } = useData('study-abroad');
    const { handleDeleteSinglePost, handleSubmit, title, featureImage, price, content, country } = useContext(FromStates);
    const [addForm, setAddForm] = useState(false);

    const functions = {
        api: "study-abroad",
        handleDeleteSinglePost,
        refetch,
    }


    // FOR SUMBIT POST 
    const api = { type: "post", apiUrl: 'study-abroad' };
    const postData = {
        title,
        countryName: country,
        featureImage,
        price,
        content
    }

    // UPDATE POST 

    const itemData = {
        title,
        featureImage,
        price,
        content
    }
    const getIdFromParams = getParams('update-id');
    if (getIdFromParams) {
        return <UpdatePost
            handleUpdate={() => {
                handleSubmit(urlCreate('patch', `study-abroad/${getIdFromParams}`), itemData),
                    refetch();
            }}
            api={`study-abroad/${getIdFromParams}`} />
    }

    return (
        addForm ?

            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form
                    handleSubmit={() => handleSubmit(api, postData)}
                    countrys={countrys}
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

export default StudentAbroad;