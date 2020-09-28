import React from "react";
import Intro from "./Intro";
import NavBar from "./NavBar";
import TimeLine from "./TimeLine";
import FootInfo from "./FootInfo";
import "../styles/basics.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";

library.add(fab, fas);

class App extends React.Component {
  render() {
    return (
      <div className="boxGlobal">
        <NavBar></NavBar>
        <Intro></Intro>
        <TimeLine></TimeLine>
        <FootInfo></FootInfo>
      </div>
    );
  }
}

export default App;
