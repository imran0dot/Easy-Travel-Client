import { bgStyled } from "@components/style";
import Container from "@components/base/Container";
import bgImage from '@/assets/images/paraHero.jpg'
import Sidebar from "@components/shared/Sidebar";
import TopSection from "@components/base/TopSection";
import PackageInfo from "@components/custom/SingleTourComponents/PackageInfo";
import RelativePackages from "@components/custom/SingleTourComponents/RelativePackages";

const SingleTourPackage = () => {
    const bgStyle = bgStyled(bgImage);
    const includes = Array(5).fill()
    return (
        <div>
            {/* top section  */}
            <TopSection bgImgStyle={bgStyle} title={"Bangladesh-Dhaka"} />

            {/* body */}
            <Container>
                <div className="flex flex-col lg:flex-row gap-10 my-10">
                    <PackageInfo data={includes} />
                    <Sidebar />
                </div>

                {/* packages options */}

                {/* relative packages section  */}
                <RelativePackages />
            </Container>
        </div>

    );
};

export default SingleTourPackage;