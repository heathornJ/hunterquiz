import { useState } from "react";

//This state manages score functionality. setScore is typically called by QuizScreen. score state variable is called by ResultScreen.
function useScore () {
    const [score, setScore] = useState(0);

    const updateScore = () => {
        setScore(score + 1);
    };

    return {score, updateScore};
}

export default useScore;