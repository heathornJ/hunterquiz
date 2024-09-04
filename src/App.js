import { useState } from "react";

import HomeScreen from "./components/HomeScreen";
import HelpScreen from "./components/HelpScreen";
import QuizScreen from "./components/QuizScreen";

function App() {
  const [screen, setScreen] = useState("home");
  
  const handleHome =() => {
    setScreen("home")
  }
  
  const handleHelp = () => {
    setScreen("help");
  }

  const handleStart = () => {
    setScreen("start");
  }

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return <HomeScreen onStart={handleStart} onHelp={handleHelp}/>;
      case "help":
        return <HelpScreen onHome={handleHome}/>;
      case "start":
        return <QuizScreen onHome={handleHome}/>;
      default:
        return <HomeScreen onHelp={handleHelp}/>;
    }
  }

  return (
    <div className="App">
      <h1>Hunter Quiz</h1>
      {renderScreen()}
    </div>
  );
}

export default App;
