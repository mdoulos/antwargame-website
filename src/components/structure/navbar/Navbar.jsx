import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../../assets/logos/logo.svg';
import './navbar.scss';

const Menu = () => (
    <>
        <a href="http://www.paypal.me/awmaker" target="_blank" rel="noopener noreferrer">Donate</a>
        <NavLink to="/install">Install</NavLink>
        <NavLink to="/play">Play</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href="https://www.youtube.com/@antwargame1520" target="_blank" rel="noopener noreferrer">Watch</a>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="awg__navtop">
            <div className="awg__navtop-innercontainer">
                <div className="awg__navtopdsk-links">
                    <div className="awg__navtopdsk-links_logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="awg__navtopdsk-links_container">
                        <Menu />
                    </div>
                    <div className="awg__navtopmob-menu">
                        {toggleMenu
                            ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenuFill color="fff" size={27} onClick={() => setToggleMenu(true)} />
                        }
                    </div>
                </div>
                <div className="awg__navtopmob-menu__expanded">
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