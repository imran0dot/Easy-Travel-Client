import { dashboardNev, dashboardFooter } from "@/assets/data/dashboardData/navMenu.json";
import { MdOutlineDownhillSkiing, MdOutlineTour } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import ActiveRoute from "../../../components/base/ActiveRoute";
import { Auth } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import DeleteBtn from "../../../components/base/DeleteBtn";

const DashboardSidebar = () => {
    const { logOut } = useContext(Auth)

    return (
        <div className="bg-secondary sticky top-0 w-full h-screen pt-28 text-white font-bold text-2xl list-none flex flex-col justify-between">

            <div>
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

            {/* footer menu */}
            <div>
                {
                    dashboardFooter?.map((nav, index) => {
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
                <DeleteBtn className="w-full" handleRemove={logOut} describe="yes! logout" confirmTitle="Logut done" confirmSubtitle="Please login to for as an adminstator">Logout</DeleteBtn>
            </div>

        </div>
    );
};

export default DashboardSidebar;