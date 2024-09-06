import React from 'react';
import StartButton from './StartButton';

function ResultScreen (props) {
    const maxScore = "-";
    const rank = "-";

    return (
        <div className='resultscreen-container'>
            <div className='result-text-container'>
                <h2>Results</h2>
                <p>You answered {props.score} questions correctly out of {maxScore}!</p>
                <p>This earns you the rank of: {rank}</p>
            </div>
            <div className='nav-buttons'>
                <StartButton text="Try Again" onStart={props.onStart}/>
                <button onClick={props.onHome}>Home</button>
            </div>
        </div>
    )
}

export default ResultScreen;