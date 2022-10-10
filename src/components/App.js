import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Canvas from "./Canvas";
import NavBar from "./NavBar";
import Career from "./Career";
import More from "./More";
import FooterInfo from "./FooterInfo";
import "../styles/basics.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";

library.add(fab, fas);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="globalBox background-light-grey">
          <div className="innerGlobalBox border-dark-purple">
            <Canvas />
            <Routes>
              <Route exact path="/" element={<NavBar />} />
              <Route exact path="/career" element={<Career />} />
              <Route exact path="/more" element={<More />} />
            </Routes>
          </div>
          <FooterInfo />
        </div>
      </Router>
    );
  }
}

export default App;
