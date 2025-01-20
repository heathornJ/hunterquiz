import { useState } from "react";

//This state manages score functionality. setScore is typically called by QuizScreen. score state variable is called by ResultScreen.
function useScore() {
  const [score, setScore] = useState(0);
  const scoreIncrease = 1;
  const updateScore = () => {
    setScore(score + scoreIncrease);
  };

  const resetScore = () => {
    setScore(0);
  };

  return { score, updateScore, resetScore };
}

export default useScore;
