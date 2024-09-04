import React from 'react';

function HomeScreen (props) {
    return (
        <div className='homescreen-container'>
            <button onClick={props.onStart}>Start</button>
            <button onClick={props.onHelp}>Help</button>
        </div>
    )
}

export default HomeScreen;