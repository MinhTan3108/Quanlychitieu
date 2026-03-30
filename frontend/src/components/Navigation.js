import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [healthStatus, setHealthStatus] = useState('checking');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:5000/health');
        if (response.ok) {
          setHealthStatus('ok');
        } else {
          setHealthStatus('error');
        }
      } catch (error) {
        setHealthStatus('error');
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          💰 Quản Lý Chi Tiêu
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/">ℹ️ Thông Tin Sinh Viên</Link>
          </li>
          <li className={`health-status ${healthStatus}`}>
            <span className="status-indicator"></span>
            Backend: {healthStatus === 'ok' ? '✅' : '❌'}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
