import React from 'react';
import StartButton from './StartButton';

function HomeScreen (props) {
    return (
        <div className='screen-container homescreen-container'>
            <div className='home-elements'>
                <h1>HUNTER QUIZ</h1>
                <div className='nav-buttons'>
                    <StartButton text="Start" onStart={props.onStart}/>
                    <button onClick={props.onHelp}>Help</button>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;