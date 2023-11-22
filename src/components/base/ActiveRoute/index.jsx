import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children, to, exact }) => {

    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive && exact === to ? "p-6 rounded-e-md  border-b border-primary cursor-pointer w-full flex  items-center  gap-5 bg-primary" : "p-6 border-b border-b-blue-300 border-opacity-50 hover:bg-primary transition-all cursor-pointer w-full flex items-center gap-5"
                } >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveRoute;