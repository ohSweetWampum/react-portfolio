import React, { useState, useEffect, useCallback } from "react";
import ProjectTile from "./ProjectTile";
import projects from "./projects";

const PortfolioPage = () => {
  const [numProjectsToShow, setNumProjectsToShow] = useState(6);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setNumProjectsToShow(numProjectsToShow + 3);
  }, [numProjectsToShow]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div id="portfolio" className="main-page">
      <section id="intro">
        <div className="middle-container text-center row">
          <div
            className="animation-container animation-fade-down col-12"
            data-animation-delay="0"
          >
            <h1 className="developer-title">Welcome to My Portfolio</h1>
          </div>
        </div>
        <div className="middle-container text-center row">
          <div
            className="animation-container animation-fade-up col-12"
            data-animation-delay="300"
          >
            <p className="subheading">Explore my projects below!</p>
          </div>
        </div>
      </section>
      <section id="projects">
        {projects.slice(0, numProjectsToShow).map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
