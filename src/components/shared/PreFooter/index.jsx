import Title from "@components/base/Title";
import Container from "@components/base/Container";
import { BsFillTelephoneFill } from "react-icons/bs"

const PreFooter = () => {
    return (
        <div className="bg-tertiary py-20 text-center ">
            <Container>
                <div className="lg:w-6/12 mx-auto">
                    <Title title="Choose your Trip" subTitle="Start your Vacation Now" />
                    <p>Looking for your dream vacation destination but don't know where to start? With the help of experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</p>
                    <button className="btn btn-outline btn-lg mt-10"> <BsFillTelephoneFill />Call Now</button>
                </div>
            </Container>
        </div>
    );
};

export default PreFooter;