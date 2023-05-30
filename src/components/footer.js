import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/matthew-gibson-6b9b12237/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://medium.com/@mtgibson888"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
      <a
        href="https://github.com/ohSweetWampum"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;
