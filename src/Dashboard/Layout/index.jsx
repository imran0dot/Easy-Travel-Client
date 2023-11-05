import DashboardSidebar from "@dashboard/Components/DashboardSidebar";
import DashboardTopBar from "@dashboard/Components/DashboardTopBar";
import { Outlet } from "react-router-dom";
import FuntionProvider from "./Provider/FunctionProvider";

const DashboardLayout = () => {
    return (
        <div>
            <DashboardTopBar />
            <div className="flex">
                <div className="w-2/12">
                    <DashboardSidebar />
                </div>
                <div className="p-5 w-10/12 bg-slate-200">
                    <FuntionProvider>
                        <Outlet />
                    </FuntionProvider>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;