import { useState } from "react";
import config from "../data/config.json";

/* Set initialScreen to home when testing is finished */
function useNavigation(initialScreen = config.sections.screens.home) {
  /* Sets what screen component is currently displayed */
  const [screen, setScreen] = useState(initialScreen);

  const navigateTo = (page) => {
    setScreen(page);
  };

  /* Returns the screen state and navigateTo function */
  return {
    screen,
    navigateTo,
  };
}

export default useNavigation;
