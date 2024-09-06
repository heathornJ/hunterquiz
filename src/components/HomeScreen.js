import React from 'react';
import StartButton from './StartButton';

function HomeScreen (props) {
    return (
        <div className='homescreen-container'>
            <StartButton text="Start" onStart={props.onStart}/>
            <button onClick={props.onHelp}>Help</button>
        </div>
    )
}

export default HomeScreen;