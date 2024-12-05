import React from 'react';
import './Header.css';

const Header = ({ greeting }) => {
  return (
    <div className="header">
      <h1>{greeting}</h1>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
