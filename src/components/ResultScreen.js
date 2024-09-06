import React from 'react';

function ResultScreen (props) {

    const score = "-";
    const maxScore = "-";
    const rank = "-";

    return (
        <div className='resultscreen-container'>
            <div className='result-text-container'>
                <h2>Results</h2>
                <p>You answered {score} questions correctly out of {maxScore}!</p>
                <p>This earns you the rank of: {rank}</p>
            </div>
            <div className='nav-buttons'>
                <button onClick={props.onStart}>Try Again</button>
                <button onClick={props.onHome}>Home</button>
            </div>
        </div>
    )
}

export default ResultScreen;