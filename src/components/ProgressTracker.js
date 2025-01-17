import React from "react";
import PropTypes from "prop-types";
import config from "../data/config.json";

/* Progress Tracker component. currentIndex of the question array and the total array length. */
function ProgressTracker({ currentIndex, arrayLength }) {
  /*Variables to calculate what percent of the quiz the user has completed*/
  const maxIndex = arrayLength - 1;
  const percentage = (100 * currentIndex) / maxIndex;
  const percentageRounded = percentage.toFixed(0);
  const percentageWidth = percentageRounded + "%";

  /*Returns divs that reflect the progress the user has made through the quiz*/
  return (
    <>
      <div className="progress-bar-border" aria-label="quiz progress bar">
        <div className="progress-bar-background">
          <p className="progress-text">
            {config.sections.progressTracker.progress}
          </p>
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
