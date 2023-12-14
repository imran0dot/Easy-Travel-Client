import Head from "@components/base/Head";
import Table from "../../Components/Table";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext, useState } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";



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
    const { handleDeleteSinglePost } = useContext(FromStates);
    const [addForm, setAddForm] = useState(false)

    const functions = {
        api: "tour-package",
        handleDeleteSinglePost,
        refetch,
    }


    return (
        addForm ?
            <Form api={{ type: "post", apiUrl: 'tour-package' }} categorys={country} />

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