import React from "react";


/* Home Button component. */
function StartButton (props) {

    return (
        <button onClick={props.onStart}>{props.text}</button>
    )
}

export default StartButton;