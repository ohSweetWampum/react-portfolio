import React from "react";
import myPicture from "../images/biopic2.jpeg";
import { Avatar, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <Avatar
        className="headshot"
        alt="Matt Gibson"
        src={myPicture}
        sx={{ width: 400, height: 400 }}
      />

      <Typography variant="h4" component="div" className="name">
        Matt Gibson
      </Typography>

      <Typography className="bio" variant="body1">
        Hello! My name is Matt Gibson and welcome to my portfolio page! My
        background is in analytical chemistry and biology, but I made the
        decesion to jump to a new carrer in the computer technology industry. I
        graduated from University of Wisconsin-Madison with a BS degree in
        Biology. Since graduating I have worked in Florida for an algae farm and
        in Wisonsin as an analytical chemist. As I accumulate projects I will
        post them here.
      </Typography>

      <div className="links-container">
  <Box>
    <Typography className="email" variant="body1">
      <a href="mailto:mtgibson888@gmail.com">mtgibson888@gmail.com</a>
    </Typography>
  </Box>
  <Box>
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        href="https://www.linkedin.com/in/matthew-gibson-6b9b12237/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </motion.div>
  </Box>
  <Box>
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        href="https://github.com/ohSweetWampum?page=1&tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </motion.div>
  </Box>
</div>

    </div>
  );
}

export default About;
