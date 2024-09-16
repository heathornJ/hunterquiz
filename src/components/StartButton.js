import React from "react";
import PropTypes from "prop-types";

/* Home Button component. */
function StartButton(props) {
  return <button onClick={props.onStart}>{props.text}</button>;
}

StartButton.propTypes = {
  onStart: PropTypes.func.isRequired, // Ensures onStart is a required function
  text: PropTypes.string.isRequired, // Ensures text is a required string
};

export default StartButton;
