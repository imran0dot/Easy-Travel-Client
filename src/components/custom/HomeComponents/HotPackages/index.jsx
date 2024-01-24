import Title from "@components/base/Title";
import Container from "@components/base/Container";
import PackageSlider from "@components/shared/PackageSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../base/LoadingSpinner";


const HotPackages = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios('tourist-visa').then(res => setData(res.data))
    }, [])
    return (
        <div className="my-10 relative">
            <Container>
                <div className="lg:w-7/12">
                    <Title title="Next Adventure" subTitle="Travel Destinations Available Worldwide" />
                    <p>We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.</p>
                </div>

                {data.length === 0 && <LoadingSpinner />}
                <PackageSlider data={data.splice(0, 5)} />
            </Container>
        </div >
    );
};

export default HotPackages;