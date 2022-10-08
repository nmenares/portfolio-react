import React from "react";
import "../styles/footerinfo.css";

class FooterInfo extends React.Component {
  render() {
    return (
      <div className="ui grid middle aligned boxFooter">
        <div className="row footer text-dark">
          <div className="sixteen wide column center aligned">© Nataly Menares • 2022</div>
        </div>
      </div>
    );
  }
}

export default FooterInfo;
