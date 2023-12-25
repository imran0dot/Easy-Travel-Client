import Hero from "@components/custom/HomeComponents/Hero";
import HotPackages from "@components/custom/HomeComponents/HotPackages";
import Informations from "@components/custom/HomeComponents/Informations";
import Review from "@components/custom/HomeComponents/Review";
import Head from "@components/base/Head";

const Home = () => {
    return (
        <div>
            <Head title="Provideing inspiration abroad | Easy Travels" />
            <Hero />
            <HotPackages />
            <Informations />
            <Review />
        </div>
    );
};

export default Home;