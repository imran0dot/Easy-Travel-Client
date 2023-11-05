import Hero from "@components/custom/HomeComponents/Hero";
import HotPackages from "@components/custom/HomeComponents/HotPackages";
import Informations from "@components/custom/HomeComponents/Informations";
import Review from "@components/custom/HomeComponents/Review";
import Head from "@components/base/Head";

const Home = () => {

    return (
        <div>
            <Head title="Home | PROVIDEING INSPIRATION ABROAD" />
            <Hero />
            <HotPackages />
            <Informations />
            <Review />
        </div>
    );
};

export default Home;