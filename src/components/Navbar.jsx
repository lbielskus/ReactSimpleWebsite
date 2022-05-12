import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo1.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" width="100" height="60" />
            <p className="logo-text">React.js</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/how-to-buy"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                How to buy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ecosystem"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ecosystem
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/roadmap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nft" className="nav-links" onClick={closeMobileMenu}>
                NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
