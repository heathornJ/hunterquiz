import React from "react";
import PropTypes from "prop-types";
import StartButton from "./StartButton";

function HomeScreen(props) {
  return (
    <div className="screen-container homescreen-container">
      <div className="home-elements">
        <h1>HUNTER QUIZ</h1>
        <div className="nav-buttons">
          <StartButton text="Start" onStart={props.onStart} />
          <button onClick={props.onHelp}>Help</button>
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
