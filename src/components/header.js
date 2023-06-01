// Importing required dependencies and components
import React from "react";
import Navigation from "./navigation";
import "../styles/header-navbarCombo.css";

// Header function component receives currentPage and handlePageChange as props from parent
function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      {/* Heading of the header */}
      <h1>Welcome to Matt Gibson's Portfolio!</h1>

      {/* Navigation component is embedded with current page and page change handler passed as props */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

// Exporting Header component to be used in other parts of the app
export default Header;
