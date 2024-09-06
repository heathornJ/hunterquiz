import { useState } from "react";

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