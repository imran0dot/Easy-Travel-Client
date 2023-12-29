import Container from "@components/base/Container";
import Sidebar from "@components/shared/Sidebar";
import TopSection from "@components/base/TopSection";
import { useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import SimpleBoxContainer from "../../components/base/SimpleBoxContainer";
import LoadingSpinner from "../../components/base/LoadingSpinner";

const SingleTourPackage = () => {
    const { pathname } = useLocation();
    const removeExtra = pathname.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
    const url = removeExtra.split("/");

    const { data } = useData(`${url[0]}/${url[1]}`);
    const { title, content, featureImage } = data ?? {};

    if (!data) {
        return <LoadingSpinner />
    }

    return (
        <div>
            {/* top section  */}
            <TopSection title={title ? title : ""} />

            {/* body */}
            <Container>
                <div className="flex flex-col lg:flex-row gap-10 my-10 overflow-hidden h-full">
                    <div className="lg:w-8/12" dangerouslySetInnerHTML={{ __html: content }}></div>

                    <div className="lg:w-4/12 relative flex flex-col gap-10">
                        <SimpleBoxContainer>
                            <img src={featureImage && featureImage} alt="" />
                        </SimpleBoxContainer>
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default SingleTourPackage;