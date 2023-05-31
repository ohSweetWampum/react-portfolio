import React from "react";
import Navigation from "./navigation";
import "../styles/header-navbarCombo.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <h1>Welcome to Matt Gibson's Portfolio!</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
