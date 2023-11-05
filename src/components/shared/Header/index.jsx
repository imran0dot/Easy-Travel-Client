import { navItems } from "@/assets/data/menuItems.json"
import NavDektop from "@components/base/NavDesktop";
import Logo from "@components/base/logo";
import TopBar from "@components/custom/HeaderComponents/TopBar";
import Container from "@components/base/Container";
import CallNowBtn from "@components/base/CallNowBtn";

const Header = () => {
    return (
        <div>
            <TopBar />

            <div className="h-[100px] border-b">
                <Container>
                    <div className="navbar justify-between">
                        <Logo />

                        {/* Desktop Menu Items  */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {
                                    navItems?.map((navMenu, index) => <NavDektop key={index} navMenu={navMenu} />)
                                }
                            </ul>
                        </div>

                    <CallNowBtn />

                    </div>


                </Container>

            </div>
        </div>
    );
};

export default Header;