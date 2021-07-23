import { useState } from 'react';

const MODE_KEY = 'mode';
const useDarkMode = (initialValue = false) => {
    // const [darkMode, setDarkMode] = useLocalStorage(MODE_KEY, false);
    const [isDarkMode, setDarkMode] = useState(() => {
        try {
            const mode = localStorage.getItem(MODE_KEY);
            return mode === 'true' ?? initialValue;
        } catch (error) {
            console.log(`[useDarkMode] - ${error}`);
            return initialValue;
        }
    });

    function toggleDarkMode(on = true) {
        if (on !== isDarkMode) {
            localStorage.setItem(MODE_KEY, on);
            setDarkMode(on);
        }
    }

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
