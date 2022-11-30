import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "semantic-ui-react";
import Canvas from "./Canvas";
import { texts } from "../utils/Texts.js";

const NavBar = ({ useThemeColor }) => {
  return (
    <div className="ui grid top aligned boxNavbar">
      <Canvas useThemeColor={useThemeColor} />
      <div className="row header">
        <div className="sixteen wide column tittleWrapper">
          <div className="ui grid">
            <div className="row navbarTitle">Nataly Menares</div>
            <div className="row navbarSubtitle">UX/UI Software Engineer</div>
          </div>
        </div>
        {/* <div className="eight wide column right aligned linkIcons">
            <a
              href="https://github.com/nmenares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/nmenares/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="/resume.pdf" download>
              <Popup
                content="Download Resume"
                position="bottom right"
                trigger={
                  <FontAwesomeIcon icon={["fas", "arrow-circle-down"]} />
                }
              />
            </a>
          </div> */}
      </div>
      <div className="row main text-dark-purple">
        <div className="sixteen wide column menu">
          <div className="ui grid">
            <div className="row option">
              <Link to="/background">Background</Link>
            </div>
            <div className="row option">
              <Link to="/career">Projects</Link>
            </div>
            <div className="row option">
              <Link to="/career">Gallery</Link>
            </div>
            <div className="row option">
              <Link to="/career">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
