import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNavbarCombo from "./components/header-navbarCombo";
import Footer from "./components/footer";
import AboutPage from "./pages/aboutPage";
import PortfolioPage from "./pages/portfolioPage";
import ContactPage from "./pages/contactPage";
import ResumePage from "./pages/resumePage";
import SingleProjectPage from "./pages/singleProjectPage";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <HeaderNavbarCombo />
      <Routes>
        <Route exact path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<SingleProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
