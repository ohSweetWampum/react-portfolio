import React from "react";
import "../styles/footer.css";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// This function returns the footer of the page which includes links to the author's social media profiles
function Footer() {
  return (
    <footer className="footer">
      {/* Link to LinkedIn profile */}
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

      {/* Link to Medium profile */}
      <Box>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://medium.com/@mtgibson888"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </motion.div>
      </Box>

      {/* Link to GitHub profile */}
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
    </footer>
  );
}

export default Footer;
