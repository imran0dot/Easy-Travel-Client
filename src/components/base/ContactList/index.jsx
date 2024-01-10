import { FaWhatsapp, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactList = ({ nav }) => {
    const { label, link, icon } = nav;

    return (
        <li className='list-none'>
            <Link to={link}
            className='flex items-center gap-2'>
                {icon === 'FaWhatsapp' && <FaWhatsapp />}
                {icon === 'FaFacebook' && <FaFacebook />}
                {icon === 'FaPhoneAlt ' && <FaPhoneAlt />}

                {label}
            </Link>
        </li>
    );
};

export default ContactList;