import React from 'react';
import './App.css';
import { MainDashboard, RigtSide } from './components';

function App() {
    return (
        <div className="App">
            <div className="AppGlass">               
                <MainDashboard />
                <RigtSide />
            </div>
        </div>
    );
}

export default App;
