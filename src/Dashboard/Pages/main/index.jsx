import { useEffect, useState } from "react";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import axios from "axios";

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
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.tourPackageCount || 0)}</p>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-xl uppercase">Tourist Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.touristPackageCount || 0)}</p>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-xl uppercase">Student Visa Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">{manageCount(data?.studentVisaCount || 0)}</p>
                </SimpleBoxContainer>

            </div>
        </div>
    );
};

export default DashboardMain;