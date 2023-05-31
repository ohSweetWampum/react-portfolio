import React from "react";
import myPicture from "../../../images/biopic2.jpeg";
import { Avatar, Typography, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <Avatar
        className="headshot"
        alt="Matt Gibson"
        src={myPicture}
        sx={{ width: 200, height: 200 }}
      />

      <Typography variant="h4" component="div" className="name">
        Matt Gibson
      </Typography>

      <Typography className="bio" variant="body1">
        bio here
      </Typography>

      <div className="links-container">
        <Typography className="email" variant="body1">
          mtgibson888@gmail.com
        </Typography>
        <Box>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://www.linkedin.com/in/matthew-gibson-6b9b12237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </motion.div>
        </Box>
        <Box>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com/ohSweetWampum?page=1&tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
          </motion.div>
        </Box>
      </div>
    </div>
  );
}

export default About;
