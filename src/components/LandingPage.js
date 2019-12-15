import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function LandingPage() {
  return (
    <ScrollableAnchor id={"home"}>
      <div id="landing_page">
        <div className="lets-build-div">
          <h1 className="lets-build">LET'S BUILD</h1>
        </div>
        <div className="name-div">
          <h1 className="title centered">SEAN HETZEL</h1>
          <h4 className="title centered">Full Stack Developer</h4>

          <div className="mouse-scroll">
            <span className="mouse">
              <span className="mouse-movement" />
            </span>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
export default LandingPage;
