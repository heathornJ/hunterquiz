import HomeScreen from "./components/HomeScreen";
import HelpScreen from "./components/HelpScreen";
import QuizScreen from "./components/QuizScreen";
import useNavigation from "./hooks/useNavigation";

function App() {
  const { screen, navigateTo} = useNavigation()

  const navigationHandlers = {
    home: () => navigateTo('home'),
    start: () => navigateTo('start'),
    help: () => navigateTo('help')
  }

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return <HomeScreen onStart={navigationHandlers.start} onHelp={navigationHandlers.help}/>;
      case "help":
        return <HelpScreen onHome={navigationHandlers.home}/>;
      case "start":
        return <QuizScreen onHome={navigationHandlers.home}/>;
      default:
        return <HomeScreen onStart={navigationHandlers.start} onHelp={navigationHandlers.help}/>;
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
