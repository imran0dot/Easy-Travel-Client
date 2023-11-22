import DashboardSidebar from "@dashboard/Components/DashboardSidebar";
import DashboardTopBar from "@dashboard/Components/DashboardTopBar";
import { Outlet } from "react-router-dom";
import FuntionProvider from "./Provider/FunctionProvider";

const DashboardLayout = () => {
    return (
        <div className="bg-slate-200">
            <DashboardTopBar />
            <div className="flex min-h-screen">

                {/* SIDEBAR */}
                <div className="w-2/12 bg-secondary sticky top-0 max-h-screen -mt-28">
                    <DashboardSidebar />
                </div>

                {/* BODY */}
                <div className="p-5 w-10/12 h-full">
                    <FuntionProvider>
                        <Outlet />
                    </FuntionProvider>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;