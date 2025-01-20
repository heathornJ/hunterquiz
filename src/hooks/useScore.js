import { useState } from "react";

//This state manages score functionality. setScore is typically called by QuizScreen. score state variable is called by ResultScreen.
function useScore() {
  const defaultScore = 0;
  const [score, setScore] = useState(defaultScore);
  const scoreIncrease = 1;

  const updateScore = () => {
    setScore(score + scoreIncrease);
  };

  const resetScore = () => {
    setScore(defaultScore);
  };

  return { score, updateScore, resetScore };
}

export default useScore;
