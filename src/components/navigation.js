// Importing required dependencies
import React from "react";
import "../styles/header-navbarCombo.css";

// Navigation function component receives currentPage and handlePageChange as props from parent
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="nav-container">
      {/* Navigation links, that changes appearance based on the current page */}
      {/* If the current page matches the link, an additional class is added for styling */}
      {/* When a link is clicked, the page change handler is called with the corresponding page */}
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        className={
          currentPage === "About" ? "nav-link nav-link-active" : "nav-link"
        }
      >
        About Me
      </a>
      <a
        href="#portfolio"
        onClick={() => handlePageChange("Portfolio")}
        className={
          currentPage === "Portfolio" ? "nav-link nav-link-active" : "nav-link"
        }
      >
        Portfolio
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={
          currentPage === "Contact" ? "nav-link nav-link-active" : "nav-link"
        }
      >
        Contact
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={
          currentPage === "Resume" ? "nav-link nav-link-active" : "nav-link"
        }
      >
        Resume
      </a>
    </nav>
  );
}

// Exporting Navigation component to be used in other parts of the app
export default Navigation;
