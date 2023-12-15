import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Table from "../../Components/Table";
import useData from "../../../hooks/useData";
import { useContext, useState } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import Form from "../../Components/Form";


const TouristVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('tourist-visa');
    const [addForm, setAddForm] = useState(false)

    const { handleDeleteSinglePost } = useContext(FromStates)

    const functions = {
        api: "tourist-visa",
        handleDeleteSinglePost,
        refetch,
    }

    return (
        addForm ?

            <div className="flex flex-col gap-10">
                <Button onClick={() => { setAddForm(false); refetch() }}>Back</Button>
                <Form api={{ type: "post", apiUrl: 'tourist-visa' }} />
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