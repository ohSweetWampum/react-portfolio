import React, { useState, useEffect, useCallback } from "react";
import Project from "../components/project";
import projects from "../seeds/projects";
import { Grid } from "@mui/material";

// Main component for the Portfolio Page
const PortfolioPage = () => {
  // State to track how many projects to show
  const [numProjectsToShow, setNumProjectsToShow] = useState(6);

  // Handler for the scroll event, when we reach the bottom, we will load more projects
  const handleScroll = useCallback(() => {
    // Check if we have scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    // When we reach the bottom, increase the number of projects to show
    setNumProjectsToShow(numProjectsToShow + 3);
  }, [numProjectsToShow]);

  // Hook to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    // Main container for the portfolio page
    <div id="portfolio" className="main-page">
      <section id="intro">
        <div className="middle-container text-center row">
          <div
            className="animation-container animation-fade-down col-12"
            data-animation-delay="0"
          >
            {/*Title for the portfolio page*/}
            <h1 className="developer-title">Welcome to My Portfolio</h1>
          </div>
        </div>
        <div className="middle-container text-center row">
          <div
            className="animation-container animation-fade-up col-12"
            data-animation-delay="300"
          >
            {/*Subtitle for the portfolio page*/}
            <p className="subheading">Explore my projects below!</p>
          </div>
        </div>
      </section>
      <section id="projects">
        <Grid container spacing={2}>
          {/*render list of projects*/}
          {projects.slice(0, numProjectsToShow).map((project) => (
            <Grid item xs={12} sm={6} key={project.id}>
              {/*project component to display project*/}
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default PortfolioPage;
