import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function Project({ project }) {
  return (
    <Card style={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </Button>
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

export default Project;
