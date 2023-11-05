import logo from '@/assets/images/logo.jpg'
import { Link } from 'react-router-dom';

const Logo = ({width}) => {
    return (
        <Link to="/">
            <img width={width? width : "90px"} src={logo} alt="" />
        </Link>
    );
};

export default Logo;