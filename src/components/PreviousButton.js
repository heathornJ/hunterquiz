import React from "react";

/* PreviousButton component. Accepts state variable, state setter to move to the previous index in an array. */
function PreviousButton ({ currentIndex, setIndex}) {
    const handleNextClick = () => {
        if (currentIndex > 0) {
            setIndex(currentIndex - 1);
        }
    }

    return (
        <button onClick={handleNextClick} disabled={currentIndex === 0}>
            Back
        </button>
    )
}

export default PreviousButton;