import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage'; // You need to create this component
import './App.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;