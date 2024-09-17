import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import questions from "../data/questions";
import NextButton from "./NextButton";

function QuizScreen(props) {
  //State for the question array index
  const [questionIndex, setQuestionIndex] = useState(0);
  //State for displaying the NextButton component
  const [showNextButton, setShowNextButton] = useState(false);
  //State for answer buttons being disabled.
  const [buttonDisabled, setButtonDisabled] = useState(false);
  //State to store shuffled questions
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  // State for shuffled answers
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  // State for identifying selected answer button
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //Gets the currentQuestion from the shuffledQuestions array.
  const currentQuestion = shuffledQuestions[questionIndex];

  // Fisher-Yates Sorting Algorithm used to randomise question order
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (event, isCorrect) => {
    //Gets the button that was clicked.
    const targetButton = event.target;
    //Sets the state to the selected button.
    setSelectedAnswer(targetButton);
    setShowNextButton(true);
    setButtonDisabled(true);

    if (isCorrect) {
      props.updateScore();
      //Sets the id of button to correct-answer. CSS will modify this to appear green.
      targetButton.id = "correct-answer";
    }

    if (!isCorrect) {
      //Sets the ide of button to incorrect-answer. CSS will modify this to appear red.
      targetButton.id = "incorrect-answer";
    }
  };

  // Shuffle called within useEffect so that it is only shuffled when the quizComponent is rendered, not re-rendered.
  useEffect(() => {
    const shuffledArray = shuffle([...questions]); // Avoids modifying the original questions array.
    setShuffledQuestions(shuffledArray);
  }, []);

  /* Shuffle answers when a new question is loaded and is a multiple-choice question. 
       Only attempts to shuffle answers when the questions are shuffled.
    */
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      if (currentQuestion.type === "multiple-choice") {
        setShuffledAnswers(shuffle(currentQuestion.answers));
      } else {
        setShuffledAnswers(currentQuestion.answers);
      }

      //Resets the button's id to hide effects of correct/incorrect answer css and resets state back to null for the next usage.
      if (selectedAnswer) {
        selectedAnswer.id = "";
        setSelectedAnswer(null);
      }
    }
  }, [questionIndex, shuffledQuestions]);

  //Protects against shuffledQuestions to being ready until after first render
  if (shuffledQuestions.length === 0 || !shuffledQuestions[questionIndex]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="screen-container quizscreen-container">
      <button className="home-button" onClick={props.onHome}>
        {/*}<FontAwesomeIcon icon={faHouse} /> */}
      </button>

      <div className="quiz-elements">
        {/* Sets the question number based of the current index */}
        <h2>QUESTION {questionIndex + 1}</h2>

        {/* Displays the question stored in the question object */}
        <div className="current-question-background">
          <p className="current-question">{currentQuestion.question}</p>
        </div>
        <div className="answer-container">
          {/* Creates a button for each answer within the question's answer array */}
          {shuffledAnswers.map((answer, index) => (
            <button
              className="answer-button"
              key={index}
              disabled={buttonDisabled}
              onClick={(event) => handleAnswerClick(event, answer.isCorrect)}
            >
              {answer.text}
            </button>
          ))}
        </div>
        <div className="nav-buttons">
          {/* Only renders the NextButton component if the showNextButton true & it is not the final question. Prevents the user from moving to the next question without selecting an answer first */}
          {showNextButton && questionIndex < questions.length - 1 ? (
            <NextButton
              currentIndex={questionIndex}
              setIndex={setQuestionIndex}
              arrayLength={questions.length}
              setShowNextButton={setShowNextButton}
              setButtonDisabled={setButtonDisabled}
            />
          ) : (
            ""
          )}
          {showNextButton && questionIndex === questions.length - 1 ? (
            <button onClick={props.onResult}>See Results</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

QuizScreen.propTypes = {
  updateScore: PropTypes.func.isRequired,
  onHome: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
};

export default QuizScreen;
