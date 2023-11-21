import { useContext, useState } from "react";
import Logo from "../../../components/base/logo"
import userPlaceHolder from '@/assets/images/placeholder.jpg'
import { Auth } from "../../../Providers/AuthProvider";

const DashboardTopBar = () => {
    const [popUp, setPopup] = useState(false);
    const { logOut } = useContext(Auth)
    return (
        <div className="shadow-lg flex items-center h-24 justify-between border-slate-500 px-5 sticky z-10 top-0 bg-white">

            <div className="w-2/4">
                <Logo width={"10%"} />
            </div>

            <div className="w-2/4 flex flex-col justify-center items-end">
                <div className="h-10 mt-2 relative z-10">
                    <h6 className=" text-lg font-bold cursor-pointer underline" onClick={() => setPopup(!popUp)}>Imran (Admin)</h6>

                    <div className={`flex flex-col p-2 border shadow-lg bg-white ${popUp ? "mt-0" : "-mt-80"}`}>
                        <div className="w-full">
                            <img width="150px" src={userPlaceHolder} alt="" />
                        </div>
                        <div className="list-none flex flex-col gap-2 mt-4">
                            <li>Edit Profile</li>
                            <li className="cursor-pointer" onClick={logOut}>Logout</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopBar;