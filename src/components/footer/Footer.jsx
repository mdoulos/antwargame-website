import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Menu = () => (
  <>
  <a href="http://www.paypal.me/awmaker">Donate</a>
  <a href="">Play</a>
  <a href="">FAQ</a>
  <a href="">About</a>
  <a href="">Contact</a>
  </>
)

const Footer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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