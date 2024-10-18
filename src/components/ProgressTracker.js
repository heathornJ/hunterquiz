import React from "react";
import PropTypes from "prop-types";

/* Next button component. Accepts state variable, state setter, and array length to move onto the next index in an array. */
function ProgressTracker({ currentIndex, arrayLength }) {
  const maxIndex = arrayLength - 1;
  const percentageWidth = (100 * currentIndex) / arrayLength + "%";

  return (
    <>
      <p>
        The current index is {currentIndex} of {maxIndex}. Current percentage
        width {percentageWidth}
      </p>
      <div className="progress-bar-border">
        <div className="progress-bar-background">
          <div
            className="progress-bar-foreground"
            style={{ width: percentageWidth }}
          ></div>
        </div>
      </div>
    </>
  );
}

ProgressTracker.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  arrayLength: PropTypes.number.isRequired,
};

export default ProgressTracker;
