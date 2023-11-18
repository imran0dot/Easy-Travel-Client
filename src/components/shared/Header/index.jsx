import { navItems } from "@/assets/data/menuItems.json"
import NavDektop from "@components/base/NavDesktop";
import Logo from "@components/base/logo";
import TopBar from "@components/custom/HeaderComponents/TopBar";
import Container from "@components/base/Container";
import NavMobile from "../../base/NavMobile";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    const [hamberger, setHamberger] = useState(false);
    const handleHamberger = () => {
        setHamberger(!hamberger)
    }

    useEffect(() => {
        document.querySelector('html').click(setHamberger(false))
    }, [])

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
                        <div className="navbar-center lg:hidden">

                            <label className="btn rounded-none text-3xl swap swap-rotate">
                                <input type="checkbox" onClick={handleHamberger} />
                                <AiOutlineMenu className="swap-off fill-current" />
                                <AiOutlineClose className="swap-on fill-current" />
                            </label>

                            <ul className={`menu menu-verti cal transition-all duration-300 px-1 absolute z-10 top-24 w-full left-0  ${hamberger ? "h-fit border" : "h-0"} rounded-sm flex flex-col gap-3 bg-white overflow-hidden p-0`}>
                                {
                                    navItems?.map((navMenu, index) => <NavMobile key={index} navMenu={navMenu} />)
                                }
                            </ul>
                        </div>
                    </div>


                </Container>

            </div>
        </div>
    );
};

export default Header;