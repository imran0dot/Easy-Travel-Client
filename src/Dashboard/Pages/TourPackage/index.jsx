import Head from "@components/base/Head";
import Table from "../../Components/Table";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext, useState } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";
import { useLocation } from "react-router-dom";
import UpdatePost from "../updatePost";


export const country = {
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
    const { handleDeleteSinglePost, handleSubmit, title, featureImage, price, content, categoryItem } = useContext(FromStates);

    const functions = {
        api: "tour-package",
        handleDeleteSinglePost,
        refetch,
    }

    const urlCreate = (type, url) => {
        return {
            type: type,
            apiUrl: url
        }
    }
    const itemData = {
        title,
        featureImage,
        price,
        content,
        categoryItem
    }


    // UPDATE POST 
    const search = useLocation().search
    const searchParams = new URLSearchParams(search);
    const singleItemId = searchParams.get('update-id');


    if (singleItemId) {
        return <UpdatePost
            handleUpdate={() => handleSubmit(urlCreate('patch', 'tour-package'), itemData)}
            api={`tour-package/${singleItemId}`}
            categorys={country} />
    }




    return (
        addForm ?
            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form
                    categorys={country}
                    handleSubmit={() => handleSubmit(urlCreate('post', 'tour-package'), itemData)}
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