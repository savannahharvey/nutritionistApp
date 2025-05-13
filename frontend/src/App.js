import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import EmptyPage from './pages/EmptyPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav class="topnav">
          <Link to="/" style = {{ marginRight: 1 }}>Home</Link>
          <Link to="/search">Search</Link>
        </nav>

        {/* Pages based on route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/empty" element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
