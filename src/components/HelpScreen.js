import React, { useState } from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';



function HelpScreen (props) {
    // Contains state for which set of help text to display.
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    // Array containing different pieces of help text.
    const helpContent = [
        "I am index 0 of help content",
        "I am index 1 of help content"
    ]

    return (
        <div className='helpscreen-container'>
            <button className='home-button' onClick={props.onHome}>Home</button>
            <h2>Help</h2>
            
            <p>{helpContent[currentInfoIndex]}</p>
            <div className='nav-buttons'>
                {currentInfoIndex > 0 ? <PreviousButton currentIndex={currentInfoIndex} setIndex={setCurrentInfoIndex}/> : ""}
                
                {/* Only displays the next button if the next index in the helpContent array exists */}
                {currentInfoIndex === helpContent.length-1 ? "" : <NextButton currentIndex={currentInfoIndex} setIndex={setCurrentInfoIndex} arrayLength={helpContent.length}/>}
            </div>
        </div>
    )
}

export default HelpScreen;