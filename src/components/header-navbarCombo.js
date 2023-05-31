import React from "react";
import "../styles/header-navbarCombo.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ color: "red" }}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeStyle={{ color: "red" }}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ color: "red" }}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeStyle={{ color: "red" }}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Welcome to Matt Gibson's Portfolio!</h1>
      <Navigation />
    </header>
  );
}

export default Header;
