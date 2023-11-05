import { dashboardNev } from "@/assets/data/dashboardData/navMenu.json";
import { Link } from "react-router-dom";
const DashboardSidebar = () => {
    return (
        <div className="bg-secondary sticky top-0 w-full min-h-screen text-white font-bold text-2xl list-none flex flex-col">
            {
                dashboardNev?.map((nav, index) => {
                    const {label, link} = nav
                    return (
                        <div key={index}>
                            <Link to={link}> 
                            <li className="p-6 border-b border-b-slate-400 hover:bg-primary transition-all cursor-pointer w-full">{label}</li>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DashboardSidebar;