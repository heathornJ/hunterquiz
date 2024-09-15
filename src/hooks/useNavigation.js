import { useState } from "react";

/* Set initialScreen to home when testing is finished */
function useNavigation(initialScreen = 'result') {
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