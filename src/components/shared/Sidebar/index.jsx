import { Link } from "react-router-dom";
import { BsWhatsapp, BsFacebook, BsTelephoneOutboundFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"

const Sidebar = () => {
    const contactInfo = [
        {
            label: "Have Question?",
            value: "01911950958",
            link: "tel:01911950958",
            icon: <BsTelephoneOutboundFill />
        },
        {
            label: "Facebook",
            value: "Easy Travel's",
            link: "https://www.facebook.com/easytravels.com.bd",
            icon: <BsFacebook />
        },
        {
            label: "What's app",
            value: "01911950958",
            link: "https://wa.me/+880191950958",
            icon: <BsWhatsapp />
        },
        {
            label: "Location",
            value: "Suite#1406 (Lift 13), Shah Ali Plaza,Mirpur 10 Roundabout, Dhaka 1216.",
            link: "https://maps.app.goo.gl/fwQhkLuMAtVJ3ewY6",
            icon: <FaMapMarkerAlt />
        }
    ]
    return (
            <div className="shadow-lg border rounded-lg p-10 sticky top-10">
                <h4 className="text-center font-bold text-4xl my-10">
                    Have any quation?
                </h4>
                <div className="flex flex-col gap-5 [&>*:nth-child(-n+3)]:border-b ">
                    {
                        contactInfo?.map((info, index) => {
                            const { label, value, link, icon } = info;
                            return (
                                <Link to={link} key={index} className="flex flex-col lg:flex-row items-center gap-5 justify-start pb-3 w-full">

                                    <div className="flex items-center text-2xl text-white bg-primary p-3 border rounded-lg">
                                        {icon}
                                    </div>

                                    <div>
                                        <h6 className="text-lg text-center lg:text-left font-bold opacity-80">{label}</h6>
                                        <h5 className="text-xl text-center lg:text-left font-bold">{value}</h5>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
    );
};

export default Sidebar;