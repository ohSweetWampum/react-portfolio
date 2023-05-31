// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// const Resume = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1); // Setting initial page to 1

//   const skills = ["JavaScript", "React", "Node.js", "Express.js"]; // add more skills

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "80%",
//         margin: "0 auto",
//         textAlign: "center",
//       }}
//       id="resume"
//     >
//       <Document
//         file={process.env.PUBLIC_URL + "/resume.pdf"}
//         onLoadSuccess={onDocumentLoadSuccess}
//         style={{ height: "75vh", width: "100%", margin: "0 auto" }}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div style={{ margin: "20px auto" }}>
//         <a href={process.env.PUBLIC_URL + "/resume.pdf"} download>
//           Download Resume
//         </a>
//         <br />
//         <a
//           href={process.env.PUBLIC_URL + "/resume.pdf"}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Open Resume in New Tab
//         </a>
//         <br />
//         <button onClick={() => window.print()}>Print Resume</button>
//       </div>
//       <div
//         style={{
//           width: "100%",
//           backgroundColor: "#f0f0f0",
//           padding: "10px",
//         }}
//       >
//         <h3>Skills</h3>
//         <ul>
//           {skills.map((skill) => (
//             <li key={skill}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

import React from "react";
import resumePDF from "../images/resume.pdf";
import resumeImage from "../images/resumeImage.png";
import { motion } from "framer-motion";
import { Grid, List, ListItem, Card, Button } from "@mui/material";
import "../styles/resume.css";

const skills = ["JavaScript", "React", "Node.js", "Express.js"]; // add more skills

const SkillsList = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <List>
        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
          <ListItem className="skill" key={skill}>
            {skill}
          </ListItem>
        ))}
      </List>
    </Grid>
    <Grid item xs={12} sm={6}>
      <List>
        {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
          <ListItem className="skill" key={skill}>
            {skill}
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

const Resume = () => (
  <Grid container spacing={3} style={{ marginBottom: "50px" }}>
    <Grid item xs={12} sm={6}>
      <Card className="resume-section">
        <h2>Skills</h2>
        <SkillsList />
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card className="resume-section">
        <h2>Resume</h2>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <motion.img
            className="resume"
            src={resumeImage}
            alt="resume"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01 }}
          />
        </a>
        <div className="button-group">
          <Button onClick={() => window.print()}>Print Resume</Button>
          <Button href={resumePDF} download>
            Download Resume
          </Button>
        </div>
      </Card>
    </Grid>
  </Grid>
);

export default Resume;
