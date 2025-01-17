import React from "react";
import useScreenHandlers from "./utils/screenHandler";

function App() {
  // Get renderScreen and other handlers
  const { renderScreen } = useScreenHandlers();
  /* Renders the Screen component */
  return <div className="App">{renderScreen()}</div>;
}

export default App;
