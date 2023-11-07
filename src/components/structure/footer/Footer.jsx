import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logos/logo.svg';
import './footer.scss';

const Menu = () => (
    <>
        <a href="http://www.paypal.me/awmaker" target="_blank" rel="noopener noreferrer">Donate</a>
        <NavLink to="/install">Install</NavLink>
        <NavLink to="/play">Play</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href="https://www.youtube.com/@antwargame1520" target="_blank" rel="noopener noreferrer">Watch</a>
    </>
)

const Footer = () => {
    return (
        <div className="awg__footer">
            <div className="awg__footer-innercontainer">
                <div className="awg__footer-links">
                    <div className="awg__footer-links_logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="awg__footer-links_container">
                        <Menu />
                    </div>
                </div>
                <div className="awg__footer-copyright">
                    <p>© 2023 Ant War Game. All Rights Reserved.</p>
                    <p>Designed by <a href="https://www.mdoulos.com">MDoulos</a>. Maker of Ant War.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer