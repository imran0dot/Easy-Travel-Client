import Title from "@components/base/Title";
import Container from "@components/base/Container";
import Button from "@components/base/Button";
import sectionBG from "@/assets/images/para-16.png"
import sectionPackage from "@/assets/images/river.jpeg"
import icon1 from "@/assets/images/icons/icon-01.png"
import icon2 from "@/assets/images/icons/icon-02.png"
import icon3 from "@/assets/images/icons/icon-03.png"
import icon4 from "@/assets/images/icons/icon-04.png"
import icon5 from "@/assets/images/icons/icon-05.png"
import icon6 from "@/assets/images/icons/icon-06.png"

const AboutUs = () => {
    const vacationInfo = [
        {
            icon: icon1,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            icon: icon2,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            icon: icon3,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            icon: icon4,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            icon: icon5,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        },
        {
            icon: icon6,
            label: "Airline Tickets",
            info: "Our travel agency specializes in providing our customers with the best deals on airline tickets."
        }
    ]


    const styled = {
        "backgroundImage": `linear-gradient(to right, rgba(245, 248, 255, 0.913), rgba(245, 248, 255, 0.913)), url(${sectionBG})`,
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "cover"
    }
    return (
        <div>
            
            <div>
                <Container>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 my-20">

                        <div>
                            <Title title="Explore the world with us, one adventure at a time." subTitle="The perfect   vacation   come true with our Travel Agency" />
                            <hr />
                            <p className="my-5">
                                We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients with a wide range of travel services, including flight bookings, hotel reservations and more.
                            </p>
                            <Button>Call Now</Button>
                        </div>

                        <div>
                            <img className="rounded-lg" src="https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/02/A-list-Travel-Solutions.jpg" alt="" />
                        </div>

                    </div>
                </Container>
            </div>


            <div className="py-20" style={styled}>
                <Container>
                    <Title title="Let us help you plan your next adventure" subTitle="Perfect Vacation come True" />
                    <div className=" grid grid-cols-3 gap-10 mt-20">
                        {
                            vacationInfo?.map((info, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-3">
                                        <img className="w-[100px]" src={info?.icon} alt="" />
                                        <h3 className="font-bold text-2xl">{info?.label}</h3>
                                        <p>{info?.info}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>


            <div>
                <Container>
                    <div className="flex justify-start gap-10 my-20 items-center bg-secondary text-white">

                        <div className="w-3/12">
                            <img src={sectionPackage} alt="" />
                        </div>

                        <div className="w-7/12">
                            <p>Exclusive travel deals</p>
                            <h2 className="font-bold text-5xl">Book your dream vacation today !</h2>
                        </div>

                        <div>
                            <button className="btn bg-primary text-white border-none">See packages</button>
                        </div>

                    </div>
                </Container>

            </div>


        </div>
    );
};

export default AboutUs;