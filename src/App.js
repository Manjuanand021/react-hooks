import React from 'react';

import useOnline from './hooks/useOnline';

import './App.css';

function App() {
    console.log('abc', 'pqr', 'mnt');
    const isOnline = useOnline();

    return (
        <div className={`App ${isOnline ? 'online' : 'offline'}`}>{isOnline ? <h1>Online</h1> : <h1>Online</h1>}</div>
    );
}

export default App;
