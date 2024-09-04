import React from 'react';

function HelpScreen (props) {
    return (
        <div className='helpscreen-container'>
            <h2>Help</h2>
            <p>This is text explaining how the quiz works.</p>
            <p>This explains it a little more!</p>
            
            <button onClick={props.onHome}>Home</button>
            <button>Next</button>
        </div>
    )
}

export default HelpScreen;