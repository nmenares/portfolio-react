import React from "react";
import "../styles/intro.css";
import { texts } from "../utils/Texts.js";

const Intro = () => {
  return (
    <div className="ui grid intro-wrapper">
      <div className="eight wide column"></div>
      <div className="seven wide column intro-text">{texts.intro}</div>
    </div>
  );
};

export default Intro;
