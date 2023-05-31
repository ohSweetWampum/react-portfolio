import React from "react";
import "../styles/header-navbarCombo.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-container">
      <NavLink
        to="/"
        exact
        activeClassName="nav-link-active"
        className="nav-link"
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        activeClassName="nav-link-active"
        className="nav-link"
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="nav-link-active"
        className="nav-link"
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        activeClassName="nav-link-active"
        className="nav-link"
      >
        Resume
      </NavLink>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome to Matt Gibson's Portfolio!</h1>
      <Navigation />
    </header>
  );
}

export default Header;
