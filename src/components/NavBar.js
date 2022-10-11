import React from "react";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "semantic-ui-react";
import { texts } from "../utils/Texts.js";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui grid top aligned boxNavbar">
        <div className="row header">
          <div className="eight wide column tittleWrapper">
            <div className="ui grid">
              <div className="row navbarTitle">
                Nataly Menares
              </div>
              <div className="row navbarSubtitle">
                Software Engineer
              </div>
            </div>
          </div>
          <div className="eight wide column right aligned linkIcons">
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
          </div>
        </div>
        <div className="row main text-dark-purple top aligned">
          <div className="eight wide column menu">
            <div className="ui grid">
              <div className="row option"><Link to="/career">Background</Link></div>
              <div className="row option"><Link to="/career">Projects</Link></div>
              <div className="row option"><Link to="/career">Gallery</Link></div>
              <div className="row option"><Link to="/career">Contact</Link></div>
            </div>
          </div>
          <div className="three wide column"></div>
          <div className="four wide column introText">
            { texts.intro }
          </div>
          <div className="one wide column"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
