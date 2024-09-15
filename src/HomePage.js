import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Fruit.Ai</h1>
      <p>Be Healthy!</p>
      <div className="button-container">
        <Link to="/chat">
          <button className="homepage-button">Chat</button>
        </Link>
        <Link to="/faq">
          <button className="homepage-button">FAQs</button>
        </Link>
        <Link to="/about">
          <button className="homepage-button">About</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
