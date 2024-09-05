import React from "react";

/* Next button component. Accepts state variable, state setter, and array length to move onto the next index in an array. */
function NextButton ({ currentIndex, setIndex, arrayLength}) {
    const maxIndex = arrayLength - 1;
    const handleNextClick = () => {
        if (currentIndex < arrayLength - 1) {
            setIndex(currentIndex + 1);
        }
    }

    return (
        <button onClick={handleNextClick} disabled={currentIndex >= maxIndex}>
            Next
        </button>
    )
}

export default NextButton;