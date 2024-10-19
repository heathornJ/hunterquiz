import React, { useState } from "react";
import PropTypes from "prop-types";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

function HelpScreen(props) {
  // Contains state for which set of help text to display.
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  // Array containing different pieces of help text.
  const helpContent = [
    "Welcome to the Hunter Quiz. To navigate through the help page and the quiz, select the 'next' button.",
    "To go back to the home screen at any point, select the 'home' button in the top-left corner. To go back to the previous help tip, select the 'back' button.",
    "To start the quiz, select the 'start' button on the home screen. This will give you your first question.",
    "To select an answer, click on one of the answer buttons below. Pick carefully, you can't change your answer once you select it.",
    "Once you select an answer, it will turn green if it's correct and red if it's incorrect. A 'next' button will appear which will take you to the next question.",
    "Once you answer the final question, you'll see your total score and your hunter rank. Each question is worth 1 point.",
    "When you're ready, select the home button and press 'start' to begin.",
  ];

  return (
    <div className="screen-container helpscreen-container">
      <button className="home-button" onClick={props.onHome}>
      </button>
      <div className="help-elements">
        <h2>HELP</h2>
        <div className="help-content-background">
          <p>{helpContent[currentInfoIndex]}</p>
        </div>
        <div className="nav-buttons" id="help-nav-buttons">
          {/* Only displays the next button if the next index in the helpContent array exists */}
          {currentInfoIndex === helpContent.length - 1 ? (
            ""
          ) : (
            <NextButton
              currentIndex={currentInfoIndex}
              setIndex={setCurrentInfoIndex}
              arrayLength={helpContent.length}
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
