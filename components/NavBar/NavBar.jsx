import React, { useState } from "react";
import Link from "next/link";
import logo from "../../images/NavBar/uma-lancha-veiculos-barcos-1499227.jpg";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="#">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="#">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="#">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="#">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo.src} alt="image-" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" href="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" href="#">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" href="#">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" href="#">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" href="#">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" href="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" href="/">
              Register
            </Link>
          </div>
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
