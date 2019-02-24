import React, { useState, useEffect } from "react";

import Hamburger from "../assets/media/menu_icon.png";
import Close from "../assets/media/close_icon.png";

export default () => {
  const [mobileNav, setMobileNav] = useState(false);

  let handleClick = () => {
    const nav = document.querySelector(".main-nav");
    const icon = document.querySelector(".main-nav__mobile-icon");

    nav.classList.toggle("main-nav--mobile-nav");
    icon.classList.toggle("main-nav__mobile-icon--active");

    setMobileNav(!mobileNav);
  };

  (() => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        const nav = document.querySelector(".main-nav");
        const icon = document.querySelector(".main-nav__mobile-icon");
        if (width >= 768 && mobileNav) {
          nav.classList.remove("main-nav--mobile-nav");
          icon.classList.remove("main-nav__mobile-icon--active");
          setMobileNav(false);
        }
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
  })();

  return (
    <header className="page-header">
      <div className="logo">
        <span>Drone</span>
        <span className="logo__span--light">Zone</span>
      </div>
      <div className="logo--mobile">
        <span>D</span>
        <span className="logo__span--light">Z</span>
      </div>
      <img
        onClick={handleClick}
        src={mobileNav ? Close : Hamburger}
        className="main-nav__mobile-icon"
        alt="Mobile navigation icon"
      />
      <nav className="main-nav">
        <a href="/Home" className="main-nav__link">
          Home
        </a>
        <a href="/Home" className="main-nav__link">
          About
        </a>
        <a href="/Home" className="main-nav__link">
          Pricing
        </a>
        <a href="/Home" className="main-nav__link">
          Our drones
        </a>
        <a href="/Home" className="main-nav__link">
          Our realizations
        </a>
        <a href="/Home" className="main-nav__link">
          Contact
        </a>
      </nav>
    </header>
  );
};
