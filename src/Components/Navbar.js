import React from "react";
import "../Components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-wrapper">
          <div className="logo">
            <a href="#">VB</a>
          </div>
          <div>
            <ul className="menu-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
