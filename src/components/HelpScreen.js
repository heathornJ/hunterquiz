import React, { useState } from "react";
import PropTypes from "prop-types";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import config from "../data/config.json";

function HelpScreen(props) {
  // Contains state for which set of help text to display.
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  return (
    <div className="screen-container helpscreen-container">
      <button className="home-button" onClick={props.onHome}></button>
      <div className="help-elements">
        <h2>{config.sections.helpScreen.header}</h2>
        <div className="help-content-background">
          <p>{config.sections.helpScreen.helpContent[currentInfoIndex]}</p>
        </div>
        <div className="nav-buttons" id="help-nav-buttons">
          {/* Only displays the next button if the next index in the helpContent array exists */}
          {currentInfoIndex ===
          config.sections.helpScreen.helpContent.length - 1 ? (
            ""
          ) : (
            <NextButton
              currentIndex={currentInfoIndex}
              setIndex={setCurrentInfoIndex}
              arrayLength={config.sections.helpScreen.helpContent.length}
            />
          )}
          {/* Only displays the back button if the the users ie beyond the first index of helpContent*/}
          {currentInfoIndex > 0 ? (
            <PreviousButton
              currentIndex={currentInfoIndex}
              setIndex={setCurrentInfoIndex}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

HelpScreen.propTypes = {
  onHome: PropTypes.func.isRequired,
};

export default HelpScreen;
