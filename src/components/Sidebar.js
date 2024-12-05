import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/logo.png" alt="MediTouch" />
      </div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/emergency">Emergency</NavLink></li>
        <li><NavLink to="/orders">Pending Orders</NavLink></li>
        <li><NavLink to="/doctors">Doctors</NavLink></li>
        <li><NavLink to="/add-doctor">Add Emergency Doctor</NavLink></li>
      </ul>
      <button className="logout">Log Out</button>
    </div>
  );
};

export default Sidebar;
