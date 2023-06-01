import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

// This function is a component that represents a single project.
function Project({ project }) {
  // Returning a Card component from Material UI.
  return (
    <Card style={{ maxWidth: "100%" }}>
      {/* Displaying the image of the project */}
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.name}
      />

      {/* Showing the project name and description */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>

      {/* Button for the Github link */}
      <Button variant="contained" color="primary">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </Button>

      {/* Button for the deployed link */}
      <Button variant="contained" color="secondary">
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Deployed App
        </a>
      </Button>
    </Card>
  );
}

// Exporting Project component to be used in other parts of the app
export default Project;
