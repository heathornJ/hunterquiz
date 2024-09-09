import React, { useState } from 'react';

import questions from '../data/questions';
import NextButton from './NextButton';

function QuizScreen (props) {
    //State for the question array index
    const [questionIndex, setQuestionIndex] = useState(0);
    //State for displaying the NextButton component
    const [showNextButton, setShowNextButton] = useState(false);
    //State for answer buttons being disabled.
    const [buttonDisabled, setButtonDisabled] = useState(false)
    //Retrieves the question object from the question array.
    const currentQuestion = questions[questionIndex]
    //Gain access to the score state variable and state setter function from useScore.
    
    const handleAnswerClick = (event, isCorrect) => {
        //Gets the button that was clicked.
        const targetButton = event.target;
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

    }
    
    return (
        <div className='quizscreen-container'>
            <button className='home-button' onClick={props.onHome}>Home</button>

            {/* Sets the question number based of the current index */}
            <h2>Question {questionIndex + 1}</h2>
            
            {/* Displays the question stored in the question object */}
            <p>{currentQuestion.question}</p>
            <div className='answer-Container'>

                {/* Creates a button for each answer within the question's answer array */}
                {currentQuestion.answers.map((answer, index) => (
                    <button className='answer-button' key={index} disabled={buttonDisabled} onClick={(event) => handleAnswerClick(event, answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
            </div>
            <div className='nav-buttons'>
                {/* Only renders the NextButton component if the showNextButton true & it is not the final question. Prevents the user from moving to the next question without selecting an answer first */}
                {showNextButton && questionIndex < questions.length - 1 ? <NextButton currentIndex={questionIndex} setIndex={setQuestionIndex} arrayLength={questions.length} setShowNextButton={setShowNextButton} setButtonDisabled={setButtonDisabled}/> : ""}
                {showNextButton && questionIndex === questions.length -1 ? <button onClick={props.onResult}>See Results</button> : ""}
            </div>
        </div>
    )
}

export default QuizScreen;