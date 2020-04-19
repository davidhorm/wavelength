import React, { ReactElement } from 'react';
import 'typeface-roboto';
import './App.css';
import Wavelength from './components/Wavelength';

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
