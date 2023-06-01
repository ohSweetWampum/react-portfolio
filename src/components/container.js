// Importing necessary modules from the React library
import React, { useState } from "react";
import Header from "./header";
import AboutPage from "../pages/aboutPage";
import PortfolioPage from "../pages/portfolioPage";
import ContactPage from "../pages/contactPage";
import ResumePage from "../pages/resumePage";
import Footer from "../components/footer";

// The main component that holds all the other components and decides which page to display based on the current page state.
export default function Container() {
  // State hook to store the current page
  const [currentPage, setCurrentPage] = useState("About");

  // Function to determine which page to render based on the current page state
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <AboutPage />;
      case "Portfolio":
        return <PortfolioPage />;
      case "Contact":
        return <ContactPage />;
      case "Resume":
        return <ResumePage />;
      default:
        return <AboutPage />;
    }
  };

  // Function to change the current page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // Wrapper div that contains all the components of the application
    <div>
      {/* Header component is rendered and passed the current page and the function to change it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* The main section where the selected page is displayed */}
      <main>{renderPage()}</main>
      {/* The Footer component */}
      <Footer />
    </div>
  );
}
