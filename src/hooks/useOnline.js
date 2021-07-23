import { useEffect, useState } from 'react';

const useOnline = () => {
    const [online, setOnline] = useState(window.navigator.onLine);

    function onlineHandler() {
        setOnline(true);
    }

    function offlineHandler() {
        setOnline(false);
    }

    useEffect(() => {
        // setOnline(window.navigator.onLine);
        window.addEventListener('online', onlineHandler);
        window.addEventListener('offline', offlineHandler);
        return () => {
            window.removeEventListener('online', onlineHandler);
            window.removeEventListener('offline', offlineHandler);
        };
    }, []);

    return online;
};

export default useOnline;
