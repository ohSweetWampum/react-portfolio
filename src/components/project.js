// project.js

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function project({ project }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={project.imageUrl}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Link>
      </Button>
    </Card>
  );
}

export default project;
