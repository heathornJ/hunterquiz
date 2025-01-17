import React from "react";
import PropTypes from "prop-types";
import StartButton from "./StartButton";
import ranks from "../data/ranks";
import questions from "../data/questions";
import config from "../data/config.json";

function ResultScreen(props) {
  const score = props.score;
  let maxScore = questions.length;
  let rank = ranks[0].rank;

  /* 
    Iterates through the ranks array. Checks the score is greater than the minScore of that rank object.
    Also checks that the current rank minScore property is greater than the previous rank (accumulator), 
    and returns that if the score is also greater than it.
    Always returns the rank with the highest minScore property that the score is greater than or equal to
    */
  const currentRank = ranks.reduce((accumulator, rank) => {
    return rank.minScore <= score && rank.minScore > accumulator.minScore
      ? rank
      : accumulator;
  }, ranks[0]);

  rank = currentRank.rank;

  return (
    <div className="screen-container resultscreen-container">
      <div className="result-elements">
        <div className="result-text-container">
          <h2>Results</h2>
          <div className="result-paragraph-background">
            <div className="result-paragraphs">
              <p>
                {config.sections.resultScreen.resultIntro} {score}
                {config.sections.resultScreen.resultOutOf} {maxScore}
                {config.sections.resultScreen.resultExclamation}
                {}
              </p>
              <p>
                {config.sections.resultScreen.resultRank}
                <br />
                {rank}
              </p>
            </div>
          </div>
        </div>
        <div className="nav-buttons" id="result-nav-buttons">
          <StartButton
            text={config.sections.StartButton.againText}
            onStart={props.onStart}
          />
          <button onClick={props.onHome}>Home</button>
        </div>
      </div>
    </div>
  );
}

ResultScreen.propTypes = {
  score: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
};

export default ResultScreen;
