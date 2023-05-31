import React, { useState } from "react";
import Header from "./header";
import AboutPage from "../pages/aboutPage";
import PortfolioPage from "../pages/portfolioPage";
import ContactPage from "../pages/contactPage";
import ResumePage from "../pages/resumePage";
import Footer from "../components/footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
