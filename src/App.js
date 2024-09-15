import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import FAQPage from './FAQPage';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route to redirect to login */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

