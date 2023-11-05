import { BsArrowRight } from 'react-icons/bs';

const ReadMore = ({ children }) => {
    return (
        <button className="btn bg-transparent hover:bg-transparent rounded-sm pl-0 border-none font-bold text-lg hover:text-2xl text-white transition-all">
            {children}
            <BsArrowRight />
        </button>
    );
};

export default ReadMore;