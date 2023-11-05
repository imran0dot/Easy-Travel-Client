import { Link } from "react-router-dom";
import { BsWhatsapp, BsFacebook, BsTelephoneOutboundFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"

const Sidebar = () => {
    const contactInfo = [
        {
            label: "Have Question?",
            value: "01926629854",
            link: "#",
            icon: <BsTelephoneOutboundFill />
        },
        {
            label: "Facebook",
            value: "Al.Hussain.Imran",
            link: "https://www.facebook.com/Al.Hussain.Imran/",
            icon: <BsFacebook />
        },
        {
            label: "Whats app",
            value: "01926629854",
            link: "#",
            icon: <BsWhatsapp />
        },
        {
            label: "Location",
            value: "Mohammadpur Dhaka, C-Block 140",
            link: "#",
            icon: <FaMapMarkerAlt />
        }
    ]
    return (
        <div className="lg:w-4/12">
            <div className="shadow-md rounded-lg p-10 sticky top-10">
                <h4 className="text-center font-bold text-4xl my-10">
                    Have any quation?
                </h4>
                <div className="flex flex-col gap-5 [&>*:nth-child(-n+3)]:border-b ">
                    {
                        contactInfo?.map((info, index) => {
                            const { label, value, link, icon } = info;
                            return (
                                <Link to={link} key={index} className="flex gap-5 justify-start pb-3 w-full">
                                    <div className="flex items-center text-4xl text-secondary">
                                        {icon}
                                    </div>
                                    <div>
                                        <h6 className="text-lg font-bold opacity-80">{label}</h6>
                                        <h5 className="text-2xl font-bold">{value}</h5>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Sidebar;