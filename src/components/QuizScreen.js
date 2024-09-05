import React, { useState } from 'react';

import questions from '../data/questions';
import NextButton from './NextButton';

function QuizScreen (props) {
    //State for the question array index
    const [questionIndex, setQuestionIndex] = useState(0);
    
    //Retrieves the question object from the question array.
    const currentQuestion = questions[questionIndex]

    const handleAnswerClick = (isCorrect) => {
        /*TODO: Disable Button Clicks*/
        
        if (isCorrect) {
            /*TODO: Highlight green, add score*/
        }

        /*TODO: Highlight red, display Next button */
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
                    <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
            </div>
            <div className='nav-buttons'>
                {/*TODO: Render after button has been selected */}
                <NextButton currentIndex={questionIndex} setIndex={setQuestionIndex} arrayLength={questions.length}/>
            </div>
        </div>
    )
}

export default QuizScreen;