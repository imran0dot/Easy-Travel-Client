import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children, to }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "p-6  border-b border-b-slate-400 cursor-pointer w-full flex  items-center  gap-5 bg-primary" : "p-6 border-b border-b-slate-400 hover:bg-primary transition-all cursor-pointer w-full flex items-center gap-5"
                } >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveRoute;