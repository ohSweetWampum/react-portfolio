import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="developer-name">
        <h1>Welcome to Matt Gibson's Portfolio!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              My Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              My Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
