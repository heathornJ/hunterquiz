import React from "react";
import PropTypes from "prop-types";
import config from "../data/config.json";

/* PreviousButton component. Accepts state variable, state setter to move to the previous index in an array. */
function PreviousButton({ currentIndex, setIndex }) {
  const handleNextClick = () => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  return (
    <button onClick={handleNextClick} disabled={currentIndex === 0}>
      {config.sections.previousButton.back}
    </button>
  );
}

PreviousButton.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default PreviousButton;
