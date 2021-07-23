import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, upsertValue] = useState(() => {
        try {
            const extractedValue = localStorage.getItem(key);
            return JSON.parse(extractedValue) ?? initialValue;
        } catch (error) {
            console.error(`[useLocalStorage] - ${error}`);
            return initialValue;
        }
    });

    function setValue(input) {
        upsertValue(input);
        localStorage.setItem(key, JSON.stringify(input));
    }

    return [value, setValue];
};

export default useLocalStorage;
