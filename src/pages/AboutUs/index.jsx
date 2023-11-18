import Title from "@components/base/Title";
import Container from "@components/base/Container";
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
            label: "Air Ticket",
            info: "We Are Provide all IATA Member Airlines Domestic And International Cheap Air Ticket For all Over the World All destinations"
        },
        {
            icon: icon2,
            label: "Visa Process",
            info: "We Are Provide Visa Processing Service for Thailand, Singapore, Malaysia, Indonesia, China , Hong Kong, and Umrah Hajj Visa"
        },
        {
            icon: icon3,
            label: "Hotel Booking",
            info: "All Over the World All categories of accommodations, Like economic, budget, deluxe, luxury, heritage, palace - hotels & resorts, also tent, camp, cottages bookings for specified tours and stay"
        },
        {
            icon: icon4,
            label: "Student Visa",
            info: "we also process all country student visa as per candidate requirement."
        },
        {
            icon: icon5,
            label: "Package Tour",
            info: "Tailor-made, customized for groups & individuals, incentive, educational, business, corporate and professionals"
        },
        {
            icon: icon6,
            label: "Train Ticket",
            info: "India"
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
                        <div className="my-10">
                            <p className="my-5">
                                Easy Travels is a professional Travel Agent in Bangladesh. We are offering customize and packages tours for individuals, groups, travel agencies, institutions, students and family.
                            </p>
                            <p>
                                If you are planning a holiday in Thailand, Malaysia, Singapore, Dubai, Nepal, Bhutan, India, Sri Lanka, Maldives or any other destinations of your choice in the world, just let us know your tour requirements (number of guests, start date of tour, length of stay, cities or places you want to visit, class of hotel or hospitality you desire and estimative travel budget per person) and we will arrange and operate the best tour for you.
                            </p>
                        </div>
                </Container>
            </div>


            <div className="py-20" style={styled}>
                <Container>
                    <Title title="" subTitle="Our Services" />
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
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
                    <div className="flex flex-col lg:flex-row p-10 justify-start gap-10 my-20 items-center bg-secondary text-white">

                        <div className="w-full lg:w-3/12">
                            <img src={sectionPackage} alt="" />
                        </div>

                        <div className="w-full lg:w-7/12">
                            <p>Exclusive travel deals</p>
                            <h2 className="font-bold lg:text-5xl">Book your dream vacation today !</h2>
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