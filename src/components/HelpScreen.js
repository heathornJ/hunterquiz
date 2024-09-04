import React, { useState } from 'react';



function HelpScreen (props) {
    // Contains state for which set of help text to display.
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    // Array containing different pieces of help text.
    const helpContent = [
        "I am index 0 of help content",
        "I am index 1 of help content"
    ]

    // Sets the state to the next index of the helpContent array.
    const handleNextInfoClick = () => {
        if (currentInfoIndex < helpContent.length - 1) {
            setCurrentInfoIndex(currentInfoIndex + 1);
        }
    }

    // Sets the state to the previous index of the helpContent array
    const handlePreviousInfoClick = () => {
        if (currentInfoIndex > 0) {
            setCurrentInfoIndex(currentInfoIndex - 1);
        }
    }

    return (
        <div className='helpscreen-container'>
            <button className='home-button' onClick={props.onHome}>Home</button>
            <h2>Help</h2>
            
            <p>{helpContent[currentInfoIndex]}</p>
            <div className='nav-buttons'>
                <button onClick={handlePreviousInfoClick}>Back</button>
                
                {/* Only displays the next button if the next index in the helpContent array exists */}
                {currentInfoIndex === helpContent.length-1 ? "" : <button onClick={handleNextInfoClick}>Next</button>}
            </div>
        </div>
    )
}

export default HelpScreen;