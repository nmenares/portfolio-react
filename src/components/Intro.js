import React from "react";
import "../styles/navbar.css";
import { texts } from "../utils/Texts.js";

const Intro = () => {
  return (
    <div className="ui grid">
      <div className="eight wide column"></div>
      <div className="eight wide column intro-text">{texts.intro}</div>
    </div>
  );
};

export default Intro;
