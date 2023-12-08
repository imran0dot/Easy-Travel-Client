import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ReadMore = ({ children, href }) => {
    return (
        <Link to={href} className="btn bg-transparent hover:bg-transparent rounded-sm pl-0 border-none font-bold text-lg hover:text-2xl text-white transition-all">
            {children}
            <BsArrowRight />
        </Link>
    );
};

export default ReadMore;