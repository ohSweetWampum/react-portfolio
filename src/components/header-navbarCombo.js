import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/aboutPage" activeStyle={{ color: "red" }}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/homePage" activeStyle={{ color: "red" }}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactPage" activeStyle={{ color: "red" }}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resumePage" activeStyle={{ color: "red" }}>
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
