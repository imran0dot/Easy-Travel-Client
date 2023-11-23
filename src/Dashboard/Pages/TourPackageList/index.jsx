import Head from "@components/base/Head";
import Table from "../../Components/Table";
import LoadingSpinner from "../../../components/base/LoadingSpinner";
import useData from "../../../hooks/useData";
import { useContext } from "react";
import Button from "@components/base/Button";
import { FromStates } from "../../Layout/Provider/formStateHandler";



const TourPackageList = () => {
    const { data, refetch, isPending, isLoading } = useData('tour-package');
    const { handleDeleteSinglePost } = useContext(FromStates)

    const functions = {
        api: "tour-package",
        handleDeleteSinglePost,
        refetch,
    }


    return (
        <div>
            <Head title="Tour Package List" />
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

export default TourPackageList;