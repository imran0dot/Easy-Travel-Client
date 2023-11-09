import { Link } from "react-router-dom";

const NavMobile = ({ navMenu }) => {
    const {label, link} = navMenu;
    return (
        <div className="">
            <li>
                <Link to={link} className="font-bold text-lg p-5">{label}</Link>
            </li>
        </div>
    );
};

export default NavMobile;