import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <img src="/logo.png" alt="Cool Quote Logo" className="logo" />
        <h1>Welcome to Cool Quote</h1>
        <p>At Cool Quote we work with local fitters to give you an instant price for your air conditioning supply and installation.</p>
        <button onClick={() => navigate('/quote/step-1')} className="start-button">
          Get a Quote
        </button>
      </header>
    </div>
  );
}

export default Home;
