import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from "./NavBar";
import Career from './Career';
import More from './More';
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
        <div className="boxGlobal">
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<Navigate to="/career" />}/>
            <Route exact path='/career' element={< Career />}/>
            <Route exact path='/more' element={< More />}/>
          </Routes>
          <FooterInfo></FooterInfo>
        </div>
      </Router>
    );
  }
}

export default App;
