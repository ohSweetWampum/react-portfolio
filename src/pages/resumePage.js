import React from "react";
import resumePDF from "../images/resume.pdf";
import resumeImage from "../images/resumeImage.png";
import { motion } from "framer-motion";
import { Grid, List, ListItem, Card, Button } from "@mui/material";
import "../styles/resume.css";

// List of skills
const skills = [
  "GraphQL",
  "Node.js",
  "Sequelize",
  "jQuery",
  "Visual Studio",
  "React",
  "Jest",
  "MongoDB",
  "Express.js",
  "Handlebars",
  "Bootstrap",
  "JavaScript",
  "AJAX",
  "Restfull APIs",
  "MySQL",
  "Heroku",
  "Insomnia",
];

// Component to render the skills list in two columns
const SkillsList = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <List>
        {/*Mapping the first half of skills to list items*/}
        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
          <ListItem className="skill" key={skill}>
            {skill}
          </ListItem>
        ))}
      </List>
    </Grid>
    <Grid item xs={12} sm={6}>
      <List>
        {/*Mapping the second half of skills to list items*/}
        {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
          <ListItem className="skill" key={skill}>
            {skill}
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

// Main Resume component
const Resume = () => (
  <Grid container spacing={3} style={{ marginBottom: "50px" }}>
    <Grid item xs={12} sm={6}>
      <Card className="resume-section">
        <h2>Skills</h2>
        {/*Skills list component*/}
        <SkillsList />
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card className="resume-section">
        <h2>Resume</h2>
        {/*Link to the resume PDF*/}
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          p
          <motion.img
            className="resume"
            src={resumeImage}
            alt="resume"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01 }}
          />
        </a>
        <div className="button-group">
          {/*Button to print the resume*/}
          <Button onClick={() => window.print()}>Print Resume</Button>
          {/*Button to download the resume*/}
          <Button href={resumePDF} download>
            Download Resume
          </Button>
        </div>
      </Card>
    </Grid>
  </Grid>
);

export default Resume;
