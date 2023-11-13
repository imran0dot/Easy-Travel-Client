import { dashboardNev } from "@/assets/data/dashboardData/navMenu.json";
import { MdOutlineDownhillSkiing, MdOutlineTour } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import ActiveRoute from "../../../components/base/ActiveRoute";
const DashboardSidebar = () => {
    return (
        <div className="bg-secondary sticky top-0 w-full min-h-screen text-white font-bold text-2xl list-none flex flex-col">
            {
                dashboardNev?.map((nav, index) => {
                    const { label, link, icon } = nav;
                    return (
                        <div key={index}>
                            <ActiveRoute to={link}>
                                    {icon === "MdOutlineTour" && <MdOutlineTour />}
                                    {icon === "MdOutlineDownhillSkiing" && <MdOutlineDownhillSkiing />}
                                    {icon === "FaUserGraduate" && <FaUserGraduate />}
                                    {label}
                            </ActiveRoute>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DashboardSidebar;