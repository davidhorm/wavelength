import React, { ReactElement } from 'react';
import './App.css';
import Wavelength from './components/wavelength/Wavelength';

/**
 * @returns {ReactElement} - Main App JSX
 */
function App(): ReactElement {
  return (
    <div className="App">
      <Wavelength />
    </div>
  );
}

export default App;
