// import logo from '@/assets/images/'
import logo from '/uniFatLogos.svg'
import { Link } from 'react-router-dom';

const Logo = ({width}) => {
    return (
        <Link to="/">
            <img className='object-cover h-20' width={width? width : "250px"} src={logo} alt="" />
        </Link>
    );
};

export default Logo;