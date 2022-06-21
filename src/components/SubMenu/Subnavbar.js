import React from 'react'
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-black.png'


const Subnavbar = () => {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid px-5">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} width="100" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link px-4" to="/women">WOMEN</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link px-4" to="/men">MEN</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link px-4" to="/kids">KIDS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link px-4" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
              </div>
              <Link className="navbar-brand" to="/">
                  <FaUserAlt/>
                </Link>
                <Link className="navbar-brand px-4" to="/">
                  <FaShoppingCart/>
                </Link>
            </div>
        </nav>
        </>
  )
}

export default Subnavbar