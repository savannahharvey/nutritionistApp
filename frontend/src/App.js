import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/search">Search</Link>
        </nav>

        {/* Pages based on route */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
