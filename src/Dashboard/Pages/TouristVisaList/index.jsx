import { Link, useLoaderData } from "react-router-dom";
import Table from "../../Components/Table";

const TouristVisaList = () => {
    const data = useLoaderData();
    return (
        <div>
            <Link to="/dashboard/add-tour-package" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
            <Table data={data} />
        </div>
    );
};

export default TouristVisaList;