import React, { useEffect, useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Logo from '../../assets/logo-black.png';
import './navbar.css';
import Subnavbar from '../SubMenu/Subnavbar';


const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  const [ scrolled, setScrolled ] = useState(true)
  
  useEffect(_ => {
    const handleScroll = _ => { 
      if (window.pageYOffset > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <div>
    {!scrolled && <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">HOME</a></li>
        <li className="p__opensans"><a href="#about">WOMEN</a></li>
        <li className="p__opensans"><a href="#menu">MEN</a></li>
        <li className="p__opensans"><a href="#awards">KIDS</a></li>
        <li className="p__opensans"><a href="#about">ABOUT</a></li>
        <li className="p__opensans"><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans"><FaUserAlt/></a>
        <div />
        <a href="/" className="p__opensans"><FaShoppingCart/></a>
      </div>
      {/* <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>WOMEN</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>MEN</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>KIDS</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>CONTACT</a></li>
            </ul>
          </div>
        )}
      </div> */}
    </nav>}
    {scrolled && <Subnavbar/>}
    </div>

  );
};

export default Navbar;