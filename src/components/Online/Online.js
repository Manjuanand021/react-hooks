import React from 'react';
import useOnline from '../../hooks/useOnline';

const Online = () => {
    const isOnline = useOnline();
    return isOnline ? <h1 className="text-3xl">Online</h1> : <h1 className="text-3xl">Offline</h1>;
};

export default Online;
