import React from 'react';
import StartButton from './StartButton';

function HomeScreen (props) {
    return (
        <div className='screen-container homescreen-container'>
            <h1>Hunter Quiz</h1>
            <div className='nav-buttons'>
                <StartButton text="Start" onStart={props.onStart}/>
                <button onClick={props.onHelp}>Help</button>
            </div>
        </div>
    )
}

export default HomeScreen;