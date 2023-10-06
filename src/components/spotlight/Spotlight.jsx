import React, { useState } from 'react';
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
        <div className="awg__spotlight">
            <div className="awg__spotlight-innercontainer">
            </div>
        </div>
    )
}

export default Navbar