import { navItems } from "@/assets/data/menuItems.json"
import NavDektop from "@components/base/NavDesktop";
import Logo from "@components/base/logo";
import TopBar from "@components/custom/HeaderComponents/TopBar";
import Container from "@components/base/Container";
import NavMobile from "../../base/NavMobile";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useRef, useState } from "react";

const Header = () => {
    const [hamberger, setHamberger] = useState(false);
    const navRef = useRef(null)

    return (
        <div className="relative z-50">
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


                        {/* Mobile Menu Items  */}
                        <div className="navbar-center lg:hidden" ref={navRef} >

                            <div className="btn rounded-md text-2xl text-white bg-secondary" onClick={() => setHamberger(true)}>
                                <AiOutlineMenu />
                            </div>
                            <div>

                                <ul className={`fixed top-0 bottom-0 z-10 w-full transition-all ${hamberger ? "left-0" : "-left-[100%]"}`}>
                                    <div className="relative w-full min-h-full flex flex-col justify-center items-center gap-10 h-screen bg-white">
                                        <div className="btn rounded-md absolute top-10 right-10 bg-primary p-3 text-white text-2xl z-20" onClick={() => setHamberger(false)}>
                                            <AiOutlineClose />
                                        </div>
                                        {
                                            navItems?.map((navMenu, index) => <NavMobile key={index} navMenu={navMenu} />)
                                        }
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>


                </Container>

            </div>
        </div>
    );
};

export default Header;