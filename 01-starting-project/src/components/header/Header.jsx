import React from 'react';

import './header.css';
import imageSrc from '../../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header>
      <div id='header'>
        <img src={imageSrc} alt='Logo' />
        <h1>Investment Calculator</h1>
      </div>
    </header>
  );
};

export default Header;
