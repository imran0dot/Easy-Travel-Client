import { dashboardNev, dashboardFooter } from "@/assets/data/dashboardData/navMenu.json";
import { MdOutlineDownhillSkiing, MdOutlineTour, MdSpaceDashboard } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import ActiveRoute from "../../../components/base/ActiveRoute";
import { Auth } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import DeleteBtn from "../../../components/base/DeleteBtn";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from "react-router-dom";


const DashboardSidebar = () => {
    const { logOut } = useContext(Auth);
    const { pathname } = useLocation();


    return (
        <div className="absolute top-0 w-full h-full pt-24 flex flex-col justify-between text-white font-bold text-xl list-none " >

            <div>
                {
                    dashboardNev?.map((nav, index) => {
                        const { label, link, icon } = nav;
                        return (
                            <div key={index}>
                                <ActiveRoute to={link} exact={pathname}>
                                    {icon === "MdOutlineTour" && <MdOutlineTour />}
                                    {icon === "MdOutlineDownhillSkiing" && <MdOutlineDownhillSkiing />}
                                    {icon === "FaUserGraduate" && <FaUserGraduate />}
                                    {icon === "MdSpaceDashboard" && <MdSpaceDashboard />}
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
                                    {icon === "FaUserAlt" && <FaUserAlt />}
                                    {icon === "IoMdSettings" && <IoMdSettings />}
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