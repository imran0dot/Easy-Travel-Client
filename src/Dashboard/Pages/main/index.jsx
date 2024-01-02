import { useEffect, useState } from "react";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import axios from "axios";
import { Link } from "react-router-dom";

// TODO 
const DashboardMain = () => {
    const [data, setData] = useState({});
    const manageCount = (postLength) => {
        if (postLength > 1) {
            return `${postLength} posts`;
        } else {
            return `${postLength} post`;
        }
    }

    useEffect(() => {
        axios('data').then(res => setData(res.data));
    }, [])

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center gap-10">
                <SimpleBoxContainer>
                    <h3 className="font-bold text-xl uppercase">Tour Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.tourPackageCount || 'loading..')}</p>
                    <Link to='tour-packages' className="btn w-full mt-4 btn-outline bg-secondary text-white">Tour packages</Link>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-xl uppercase">Tourist Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.touristPackageCount || 'loading..')}</p>
                    <Link to='tourist-visa' className="btn w-full mt-4 btn-outline bg-secondary text-white">TOURIST PACKAGES</Link>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-xl uppercase">Student Visa Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.studentVisaCount || 'loading..')}</p>
                    <Link to='study-abroad' className="btn w-full mt-4 btn-outline bg-secondary text-white">Study Abroad</Link>
                </SimpleBoxContainer>

            </div>
        </div>
    );
};

export default DashboardMain;