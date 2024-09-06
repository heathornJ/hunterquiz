import React, { useState } from 'react';

import questions from '../data/questions';
import NextButton from './NextButton';
import useScore from '../hooks/useScore'

function QuizScreen (props) {
    //State for the question array index
    const [questionIndex, setQuestionIndex] = useState(0);
    //State for displaying the NextButton component
    const [showNextButton, setShowNextButton] = useState(false);
    //Retrieves the question object from the question array.
    const currentQuestion = questions[questionIndex]
    //Gain access to the score state variable and state setter function from useScore.
    const { score, updateScore } = useScore();
    
    const handleAnswerClick = (event, isCorrect) => {
        //Gets an array of all buttons with the 'answer-button' class
        const buttons = document.querySelectorAll('.answer-button');
        //Gets the button that was clicked.
        const targetButton = event.target;
        setShowNextButton(true);

        //Disables each button after one has been pressed.
        buttons.forEach(button => {
            button.disabled = true;
        })
            
        if (isCorrect) {
            updateScore();
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
                    <button className='answer-button' key={index} disabled={false} onClick={(event) => handleAnswerClick(event, answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
            </div>
            <div className='nav-buttons'>
                {/* Only renders the NextButton component if the showNextButton true. Prevents the user from moving to the next question without selecting an answer first */}
                {showNextButton ? <NextButton currentIndex={questionIndex} setIndex={setQuestionIndex} arrayLength={questions.length} setShowNextButton={setShowNextButton}/> : ""}
            </div>
        </div>
    )
}

export default QuizScreen;