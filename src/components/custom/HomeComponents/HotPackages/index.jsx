import Title from "@components/base/Title";
import Container from "@components/base/Container";
import PackageSlider from "@components/shared/PackageSlider";


const HotPackages = () => {
    const arrayGrid = Array(5).fill();

    return (
        <div className="my-10">
            <Container>
                <div className="lg:w-7/12">
                    <Title title="Next Adventure" subTitle="Travel Destinations Available Worldwide" />
                    <p>We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.</p>
                </div>
                <PackageSlider data={arrayGrid} />
            </Container>
        </div >
    );
};

export default HotPackages;