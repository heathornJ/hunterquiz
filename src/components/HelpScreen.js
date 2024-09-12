import React, { useState } from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
*/


function HelpScreen (props) {
    // Contains state for which set of help text to display.
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    // Array containing different pieces of help text.
    const helpContent = [
        "I am index 0 of help content",
        "I am index 1 of help content",
        "I am index 2 of help content",
        "I am index 3 of help content"
    ]

    return (
        <div className='screen-container helpscreen-container'>
            <button className='home-button' onClick={props.onHome}>{/*}<FontAwesomeIcon icon={faHouse} /> */} </button>
            <div className='help-elements'>
                <h2>Help</h2>
                <div className='help-content-background'>
                    <p>{helpContent[currentInfoIndex]}</p>
                </div>
                <div className='nav-buttons' id='help-nav-buttons'>
                    {/* Only displays the next button if the next index in the helpContent array exists */}
                    {currentInfoIndex === helpContent.length-1 ? "" : <NextButton currentIndex={currentInfoIndex} setIndex={setCurrentInfoIndex} arrayLength={helpContent.length}/>}
                    {/* Only displays the back button if the the users ie beyond the first index of helpContent*/}
                    {currentInfoIndex > 0 ? <PreviousButton currentIndex={currentInfoIndex} setIndex={setCurrentInfoIndex}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default HelpScreen;