import React, { useState } from 'react';



function HelpScreen (props) {
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    const helpContent = [
        "I am index 0 of help content",
        "I am index 1 of help content"
    ]

    const nextInfo = () => {
        if (currentInfoIndex < helpContent.length - 1) {
            setCurrentInfoIndex(currentInfoIndex + 1);
        }
    }

    const previousInfo = () => {
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
                <button onClick={previousInfo}>Back</button>
                {currentInfoIndex === helpContent.length-1 ? "" : <button onClick={nextInfo}>Next</button>}
            </div>
        </div>
    )
}

export default HelpScreen;