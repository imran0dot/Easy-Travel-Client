import DashboardSidebar from "@dashboard/Components/DashboardSidebar";
import DashboardTopBar from "@dashboard/Components/DashboardTopBar";
import { Outlet } from "react-router-dom";
import FuntionProvider from "./Provider/FunctionProvider";

const DashboardLayout = () => {
    return (
        <div>
            <DashboardTopBar />
            <div className="flex max-h-screen">

                {/* SIDEBAR */}
                <div className="w-2/12 bg-secondary sticky top-0 max-h-screen -mt-28">
                    <DashboardSidebar />
                </div>

                {/* BODY */}
                <div className="p-5 w-10/12 bg-slate-200 min-h-screen">
                    <FuntionProvider>
                        <Outlet />
                    </FuntionProvider>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;