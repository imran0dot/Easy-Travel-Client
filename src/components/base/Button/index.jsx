import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Button = ({ children, to }) => {
    return (
        <Link to={to} className="btn rounded-sm px-6 font-bold bg-primary hover:bg-secondary border-none text-white">
            {children}
            <BsArrowRight />
        </Link>
    );
};

export default Button;