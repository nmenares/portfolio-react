import React from "react";
import "../styles/footinfo.css";

class FootInfo extends React.Component {
  render() {
    return (
      <div className="ui grid middle aligned boxFooter">
        <div className="row footer text-dark">
          <div className="seven wide column right aligned">Nataly Menares</div>
          <div className="two wide column center aligned">
            <img
              src="/logo-transparent.png"
              alt="NM"
              height="30px"
              width="30px"
            />
          </div>
          <div className="seven wide column">2020</div>
        </div>
      </div>
    );
  }
}

export default FootInfo;
