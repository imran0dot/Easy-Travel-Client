// import logo from '@/assets/images/'
import logo from '/easy_logo.jpg'
import { Link } from 'react-router-dom';

const Logo = ({width}) => {
    return (
        <Link to="/">
            <img width={width? width : "250px"} src={logo} alt="" />
        </Link>
    );
};

export default Logo;