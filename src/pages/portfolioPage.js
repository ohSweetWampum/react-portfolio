// Import necessary dependencies
import React, { useState, useEffect, useCallback } from "react";
import Project from "../components/project";
import projects from "../seeds/projects";
import { Grid, Fade, Zoom } from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// The PortfolioPage component represents the page where the projects are displayed
const PortfolioPage = () => {
  // Number of projects to show initially
  const [numProjectsToShow, setNumProjectsToShow] = useState(6);

  // Determine if the current screen size is small
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Callback function to handle scrolling
  const handleScroll = useCallback(() => {
    // When scrolled to the bottom, increase the number of projects to show
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setNumProjectsToShow(numProjectsToShow + 3);
  }, [numProjectsToShow]);

  // Set up an event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div id="portfolio" style={{ padding: isSmallScreen ? "10px" : "50px" }}>
      <Fade in={true} timeout={1000}>
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to My Portfolio
        </Typography>
      </Fade>
      <Fade in={true} timeout={2000}>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Explore my projects below!
        </Typography>
      </Fade>
      {/* Grid component to display the projects */}
      <Grid container spacing={isSmallScreen ? 2 : 5}>
        {/* Map through the projects array and display each project */}
        {projects.slice(0, numProjectsToShow).map((project, index) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
              <Project project={project} />
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// Exporting the PortfolioPage component for use in other files
export default PortfolioPage;
