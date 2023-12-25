import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Table from "../../Components/Table";
import useData from "../../../hooks/useData";
import { useContext, useState } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";
import getParams from "../../../utils/getParams";
import UpdatePost from "../updatePost";
import urlCreate from "../../../utils/getUrlForSubmit";


const TouristVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('tourist-visa');
    const [addForm, setAddForm] = useState(false)

    const { handleDeleteSinglePost, handleSubmit, title, featureImage, price, content } = useContext(FromStates)

    const functions = {
        api: "tourist-visa",
        handleDeleteSinglePost,
        refetch,
    }


    // FOR SUMBIT POST 
    const api = { type: "post", apiUrl: 'tourist-visa' };
    const postData = {
        title,
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
                handleSubmit(urlCreate('patch', `tourist-visa/${getIdFromParams}`), itemData),
                    refetch();
            }}
            api={`tourist-visa/${getIdFromParams}`} />
    }

    return (
        addForm ?

            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form
                    handleSubmit={() => handleSubmit(api, postData)}
                    priceElement={true}
                />
            </div>

            :

            <div>
                <Head title="Tourist Visa List" />
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

export default TouristVisaList;