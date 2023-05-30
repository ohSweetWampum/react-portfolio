import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projects";

const SingleProjectPage = () => {
  const { id } = useParams();

  const project = projects.find((proj) => proj.id === Number(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="single-project">
      <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={project.repo} target="_blank" rel="noreferrer">
        Repo Link
      </a>
      <a href={project.demoVideo} target="_blank" rel="noreferrer">
        Demo Video
      </a>
    </div>
  );
};

export default SingleProjectPage;
