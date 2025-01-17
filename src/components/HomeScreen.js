import React from "react";
import PropTypes from "prop-types";
import StartButton from "./StartButton";
import config from "../data/config.json";

function HomeScreen(props) {
  return (
    <div className="screen-container homescreen-container">
      <div className="home-elements">
        <h1>{config.sections.homeScreen.heading}</h1>
        <div className="nav-buttons">
          <StartButton
            text={config.sections.startButton.start}
            onStart={props.onStart}
          />
          <button onClick={props.onHelp}>
            {config.sections.helpButton.help}
          </button>
        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  onStart: PropTypes.func.isRequired, // Ensures onStart is a required function
  onHelp: PropTypes.func.isRequired,
};

export default HomeScreen;
