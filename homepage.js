import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import logo from './assets/S.jpg'; // Ensure this path is correct

const HomePage = () => {
  const navigate = useNavigate();

  const handleAdminLoginClick = () => {
    navigate('/login');
  };

  const handleEmployeeLoginClick = () => {
    navigate('/Employeelogin');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-logo-container">
          <img src={logo} alt="Company Logo" className="home-logo" />
        </div>
        <h1 className="home-title">Syliqon Software Management</h1>
        <button
          className="home-button"
          onClick={handleAdminLoginClick}
        >
          Admin Login
        </button>
        <button
          className="home-button"
          onClick={handleEmployeeLoginClick}
        >
          Employee Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
