// Import required components from Material UI
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
// Importing the icons to be used in the buttons
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Create a function component that can accept a ref
// This component represents a single project
const Project = React.forwardRef(({ project }, ref) => {
  return (
    // Card component to display each project details
    <Card ref={ref} sx={{ maxWidth: "100%", boxShadow: 3 }}>
      {/* Component to display the image of the project */}
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.name}
      />
      {/* Component to display the content of the project */}
      <CardContent>
        {/* Name of the project */}
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        {/* Description of the project */}
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      {/* Component to display the buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "10px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<VisibilityIcon />}
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View App
        </Button>
      </Box>
    </Card>
  );
});

// Exporting the Project component for use in other files
export default Project;
