import { Link } from "react-router-dom";
import Table from "../../Components/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../../components/base/LoadingSpinner";

const TourPackageList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('tour-package').then(res => {
            setLoading(false);
            setData(res.data);
        })
    }, [])

    return (
        <div>
            {
                loading ? <LoadingSpinner /> :
                    <div>
                        <Link to="/dashboard/add-tour-package" className="btn rounded-sm bg-primary btn-md text-white px-10">Add New Package</Link>
                        <Table data={data} />
                    </div>
            }
        </div>
    );
};

export default TourPackageList;