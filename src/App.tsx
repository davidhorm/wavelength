import React, { ReactElement } from 'react';
import 'typeface-roboto';
import HeaderNav from './components/HeaderNav';
import Wavelength from './components/Wavelength';

/**
 * @returns {ReactElement} - Main App JSX
 */
function App(): ReactElement {
  return (
    <>
      <HeaderNav />
      <Wavelength />
    </>
  );
}

export default App;
