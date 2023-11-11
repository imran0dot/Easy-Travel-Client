import { bgStyled } from "@components/style";
import Container from "@components/base/Container";
import Sidebar from "@components/shared/Sidebar";
import TopSection from "@components/base/TopSection";
import PackageInfo from "@components/custom/SingleTourComponents/PackageInfo";
import RelativePackages from "@components/custom/SingleTourComponents/RelativePackages";
import { useLocation } from "react-router-dom";
import useData from "../../hooks/useData";

const SingleTourPackage = () => {
    const { pathname } = useLocation();
    const removeExtra = pathname.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
    const url = removeExtra.split("/");

    const { data } = useData(`${url[0]}/${url[1]}`);
    const { title, content, featureImage } = data ?? {};

    const bgStyle = bgStyled(featureImage?.display_url);

    return (
        <div>
            {/* top section  */}
            <TopSection bgImgStyle={bgStyle} title={title? title : ""} />

            {/* body */}
            <Container>
                <div className="flex flex-col lg:flex-row gap-10 my-10 overflow-hidden">
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                    {/* <PackageInfo data={includes} /> */}
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