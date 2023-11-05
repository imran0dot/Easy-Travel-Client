import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from 'react-icons/bs'
const CallNowBtn = () => {
    return (
        <Link to="tel:+8801926629854" className='btn bg-primary text-white'> <BsFillTelephoneFill /> Call Now</Link>
    );
};

export default CallNowBtn;