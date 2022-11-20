import React from "react";
import "../styles/footerinfo.css";

const FooterInfo = ({ useThemeColor, handleTheme }) => {
  const setColorful = () => {
    handleTheme(true);
  };

  const setBlackAndWhite = () => {
    handleTheme(false);
  };

  return (
    <div className="ui grid middle aligned boxFooter">
      <div className="row footer text-dark">
        <div className="eight wide column">
          <div className="ui grid middle aligned">
            <div className="row">
              <div
                className={`square${
                  useThemeColor
                    ? " background-grey border-grey"
                    : " border-dark"
                }`}
                onClick={setColorful}
              />
              <div
                className={`square${
                  useThemeColor
                    ? " border-grey"
                    : " background-dark border-dark"
                }`}
                onClick={setBlackAndWhite}
              />
              <span className={useThemeColor ? "text-grey" : "text-dark"}>
                Black & White
              </span>
            </div>
          </div>
        </div>
        <div className="eight wide column right aligned author">
          © Nataly Menares • 2022
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
