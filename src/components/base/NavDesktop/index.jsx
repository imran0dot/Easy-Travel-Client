import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NavDektop = ({navMenu}) => {
    const {label, link} = navMenu;
    return (
        <li>
            <Link to={link} className="font-bold text-slate-700 text-lg">{label}</Link>
        </li>
    );
};

export default NavDektop;