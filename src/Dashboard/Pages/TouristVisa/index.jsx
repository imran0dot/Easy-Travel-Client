import Head from "@components/base/Head";
import LoadingSpinner from "@components/base/LoadingSpinner";
import Table from "../../Components/Table";
import useData from "../../../hooks/useData";
import { useContext } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";

const TouristVisaList = () => {
    const { data, refetch, isPending, isLoading } = useData('tourist-visa');

    const { handleDeleteSinglePost } = useContext(FromStates)

    const functions = {
        api: "tourist-visa",
        handleDeleteSinglePost,
        refetch,
    }

    return (
        <div>
             <Head title="Tourist Visa List" />
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

export default TouristVisaList;