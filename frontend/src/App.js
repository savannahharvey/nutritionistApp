
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import EmptyPage from './pages/EmptyPage';
import RecordPage from './pages/RecordPage';
import RecordDayPage from './pages/RecordDayPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 2rem", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "black" }}>
            Macro<span style={{ color: "#2563eb" }}>Mate</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ color: "black", textDecoration: "none", fontWeight: "500" }}>Home</a>
            <a href="#" style={{ color: "black", textDecoration: "none", fontWeight: "500" }}>About us</a>
            <a href="#" style={{ color: "black", textDecoration: "none", fontWeight: "500" }}>Contact</a>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{ fontSize: "0.9rem", fontWeight: "500", background: "none", border: "none", color: "black" }}>Log in</button>
            <button style={{ fontSize: "0.9rem", fontWeight: "500", backgroundColor: "#2563eb", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none" }}>Sign up</button>
          </div>
        </nav>

        {/* Pages based on route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/record" element={<RecordPage/>} />
          <Route path="/recordDay" element={<RecordDayPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
