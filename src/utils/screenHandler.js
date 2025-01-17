import React from "react";
import HomeScreen from "../components/HomeScreen";
import HelpScreen from "../components/HelpScreen";
import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import useNavigation from "../hooks/useNavigation";
import useScore from "../hooks/useScore";
import showConfirmation from "./confirmation";
import config from "../data/config.json";

const useScreenHandlers = () => {
  /* Deconstructs the screen state and navigateTo function from useNavigation */
  const { screen, navigateTo } = useNavigation();

  const { score, updateScore, resetScore } = useScore(0);
  /* object containing functions used to setState on button click.
  Also resets the score when the telling the quiz to start */
  const navigationHandlers = {
    home: () => navigateTo("home"),
    start: () => {
      resetScore();
      navigateTo("start");
    },
    help: () => navigateTo("help"),
    result: () => navigateTo("result"),
  };

  const handleHomeWithConfirmation = (navigateToHome) => {
    const message = config.sections.quizScreen.confirmation;
    if (showConfirmation(message)) {
      navigateToHome(); // Navigate to home if confirmed
    }
  };

  /* Switch to determine which Screen component should be displayed, passes relevant setState through as props for the buttons within that screen */
  const renderScreen = () => {
    switch (screen) {
      case "home":
        return (
          <HomeScreen
            onStart={navigationHandlers.start}
            onHelp={navigationHandlers.help}
          />
        );
      case "help":
        return <HelpScreen onHome={navigationHandlers.home} />;
      case "start":
        return (
          <QuizScreen
            onHome={() => handleHomeWithConfirmation(navigationHandlers.home)}
            onResult={navigationHandlers.result}
            updateScore={updateScore}
          />
        );
      case "result":
        return (
          <ResultScreen
            onStart={navigationHandlers.start}
            onHome={navigationHandlers.home}
            score={score}
          />
        );
      default:
        return (
          <HomeScreen
            onStart={navigationHandlers.start}
            onHelp={navigationHandlers.help}
          />
        );
    }
  };

  /* Renders the Screen component */
  return { renderScreen, score };
};

export default useScreenHandlers;
