import { useState } from "react";

function useNavigation(initialScreen = 'home') {
    const [screen, setScreen] = useState(initialScreen);

    const navigateTo = (page) => {
        setScreen(page);
    };

    return {
        screen,
        navigateTo,
    };
}

export default useNavigation;