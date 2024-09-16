import React from "react";
import PropTypes from "prop-types";

/* Next button component. Accepts state variable, state setter, and array length to move onto the next index in an array. */
function NextButton({
  currentIndex,
  setIndex,
  arrayLength,
  setShowNextButton,
  setButtonDisabled,
}) {
  const maxIndex = arrayLength - 1;
  const handleNextClick = () => {
    if (currentIndex < arrayLength - 1) {
      setIndex(currentIndex + 1);
    }

    //If setShowNextButton is passed as a prop, the next button will be hidden after it is pressed on the QuizScreen
    if (setShowNextButton) {
      setShowNextButton(false);
    }

    //Re-enables answers buttons on the QuizScreen when the next button is press.
    if (setButtonDisabled) {
      setButtonDisabled(false);
    }
  };

  return (
    <button onClick={handleNextClick} disabled={currentIndex >= maxIndex}>
      Next
    </button>
  );
}

NextButton.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  arrayLength: PropTypes.number.isRequired,
  setShowNextButton: PropTypes.func,
  setButtonDisabled: PropTypes.func,
};

export default NextButton;
