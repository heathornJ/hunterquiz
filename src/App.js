import useNavigation from "./hooks/useNavigation";
import HomeScreen from "./components/HomeScreen";
import HelpScreen from "./components/HelpScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  /* Deconstructs the screen state and navigateTo function from useNavigation */
  const { screen, navigateTo} = useNavigation()
  /* object containing functions used to setState on button click */
  const navigationHandlers = {
    home: () => navigateTo('home'),
    start: () => navigateTo('start'),
    help: () => navigateTo('help')
  }

  /* Switch to determine which Screen component should be displayed, passes relevant setState through as props for the buttons within that screen */
  const renderScreen = () => {
    switch (screen) {
      case "home":
        return <HomeScreen onStart={navigationHandlers.start} onHelp={navigationHandlers.help}/>;
      case "help":
        return <HelpScreen onHome={navigationHandlers.home}/>;
      case "start":
        return <QuizScreen onHome={navigationHandlers.home}/>;
      case "result":
        return <ResultScreen onStart={navigationHandlers.start} onHome={navigationHandlers.home}/>;
      default:
        return <HomeScreen onStart={navigationHandlers.start} onHelp={navigationHandlers.help}/>;
    }
  }

  /* Renders the Screen component */
  return (
    <div className="App">
      <h1>Hunter Quiz</h1>
      {renderScreen()}
    </div>
  );
}

export default App;
