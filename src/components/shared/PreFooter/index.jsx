import Title from "@components/base/Title";
import Container from "@components/base/Container";
import { BsFillTelephoneFill } from "react-icons/bs"

const PreFooter = () => {
    return (
        <div className="bg-tertiary py-10 text-center ">
            <Container>
                <div className="lg:w-6/12 mx-auto">
                    <Title title="Choose your Trip" subTitle="Start your Vacation Now" />
                    <p>Looking for your dream vacation destination but don&apos;t know where to start? With the help of experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</p>
                    <a href="https://wa.me/+880191950958" className="btn btn-md bg-secondary text-white rounded-md mt-10"> <BsFillTelephoneFill />Call Now</a>
                </div>
            </Container>
        </div>
    );
};

export default PreFooter;