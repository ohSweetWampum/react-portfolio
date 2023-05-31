import React from "react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const skills = ["JavaScript", "React", "Node.js", "Express.js"]; // add more skills

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        margin: "0 auto",
        textAlign: "center",
      }}
      id="resume"
    >
      <Document
        file={process.env.PUBLIC_URL + "/resume.pdf"}
        onLoadSuccess={() => console.log("PDF loaded successfully")}
      >
        <Page pageNumber={1} width={window.innerWidth * 0.8} />
      </Document>
      <div style={{ margin: "20px auto" }}>
        <a href={process.env.PUBLIC_URL + "/resume.pdf"} download>
          Download Resume
        </a>
        <br />
        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Resume in New Tab
        </a>
        <br />
        <button onClick={() => window.print()}>Print Resume</button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#f0f0f0",
          padding: "10px",
        }}
      >
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
