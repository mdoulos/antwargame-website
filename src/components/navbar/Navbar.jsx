import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
        <a href="http://www.paypal.me/awmaker">Donate</a>
        <a href="">Play</a>
        <a href="">About</a>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="awg__navtop">
            <div className="awg__navtop-innercontainer">
                <div className="awg__navtopdsk-links">
                    <div className="awg__navtopdsk-links_logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="awg__navtopdsk-links_container">
                        <Menu />
                    </div>
                </div>
                <div className="awg__navtopmob-menu">
                    {toggleMenu
                        ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenuFill color="fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="awg__navtopmob-menu_container scale-up-center">
                            <div className="awg__navtopmob-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar