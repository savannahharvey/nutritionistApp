
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import EmptyPage from './pages/EmptyPage';
import RecordPage from './pages/RecordPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav class="topnav">
          <Link to="/" style = {{ marginRight: 5 }}>Home</Link>
          <Link to="/search">Search</Link>
        </nav>

        {/* Pages based on route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/record" element={<RecordPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
