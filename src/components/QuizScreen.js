import React from 'react';

function QuizScreen (props) {
    return (
        <div className='quizscreen-container'>
            <button onClick={props.onHome}>Home</button>
            <h2>Question Number</h2>
            <p>The question itself</p>
            <div className='answer-Container'></div>
        </div>
    )
}

export default QuizScreen;