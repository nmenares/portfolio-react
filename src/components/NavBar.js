import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "semantic-ui-react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui grid middle aligned boxNavbar">
        <div className="row navbar background-dark text-white">
          <div className="one wide column"></div>
          <div className="one wide column right aligned">
            <img
              src="/logo-transparent.png"
              alt="NM"
              height="30px"
              width="30px"
            />
          </div>
          <div className="six wide column">Nataly Menares</div>
          <div className="seven wide column right aligned linkIcons">
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
          <div className="one wide column"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
