import Header from "@components/shared/Header";
import Footer from "@components/shared/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@components/shared/scrollToTop";

const MainContainer = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainContainer;