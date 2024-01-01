import Head from "@components/base/Head";
import Table from "../../Components/Table";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext, useState } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";
import UpdatePost from "../updatePost";
import getParams from "../../../utils/getParams";
import urlCreate from "../../../utils/getUrlForSubmit";


export const countrys = {
    name: 'Country Name',
    items: [
        {
            "name": "Dubai",
            "children": []
        },
        {
            "name": "Thailand",
            "children": []
        },
        {
            "name": "Malaysia",
            "children": []
        },
        {
            "name": "India",
            "children": []
        },
        {
            "name": "Srilanka",
            "children": []
        },
        {
            "name": "Maldives",
            "children": []
        },
        {
            "name": "Nepal",
            "children": []
        },
        {
            "name": "Indonesia",
            "children": []
        },
        {
            "name": "Vietnam",
            "children": []
        },
        {
            "name": "Singapore",
            "children": []
        },
        {
            "name": "Cambodia",
            "children": []
        }
    ]
}



const TourPackage = () => {
    const { data, refetch, isPending, isLoading } = useData('tour-package');
    const [addForm, setAddForm] = useState(false)
    const { handleDeleteSinglePost, handleSubmit, title, featureImage, price, content, country } = useContext(FromStates);

    const functions = {
        api: "tour-package",
        handleDeleteSinglePost,
        refetch,
    }


    const itemData = {
        title,
        featureImage,
        price,
        content,
        'countryName': country
    }


    // UPDATE POST 
    const getIdFromParams = getParams('update-id');
    if (getIdFromParams) {
        return <UpdatePost
            handleUpdate={() => {
                handleSubmit(urlCreate('patch', `tour-package/${getIdFromParams}`), itemData),
                    refetch();
            }}
            api={`tour-package/${getIdFromParams}`}
            countrys={countrys} />
    }




    return (
        addForm ?
            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form
                    countrys={countrys}
                    handleSubmit={() => handleSubmit(urlCreate('post', 'tour-package'), itemData)}
                    priceElement={true}
                />
            </div>

            :

            <div>
                <Head title="Tour Package List" />
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

export default TourPackage;