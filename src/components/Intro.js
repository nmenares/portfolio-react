import React from "react";
import "../styles/intro.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Intro extends React.Component {
  render() {
    return (
      <div className="ui grid middle aligned boxIntro">
        <div className="row intro">
          <div className="one wide column"></div>
          <div className="fourteen wide column">
            <Carousel infiniteLoop showArrows={true}>
              <div>
                <img src="pictures/yosemite.jpg" alt="yosemite" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src="pictures/peritomoreno.jpg" alt="peritomoreno" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src="pictures/cozumel.jpg" alt="cozumel" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="pictures/manquehue.jpg" alt="manquehue" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="pictures/torres.jpg" alt="torres" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="pictures/tahoe2.jpg" alt="tahoe2" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="pictures/uyuni.jpg" alt="uyuni" />
                <p className="legend">Legend 4</p>
              </div>
            </Carousel>
          </div>
          <div className="one wide column"></div>
        </div>
      </div>
    );
  }
}

export default Intro;
