// home page
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import salad from '../images/saladAI.jpeg';

import EmptyPage from './pages/EmptyPage';

function HomePage() {
    return (
      <div className="container fade-in">
        <div className="columnLeft">
          <h1 style={{ color: '#333', fontSize: '3rem', textAlign: 'center' }}>Your Personal AI Nutritionist</h1>

          <Router>
            <div>
              {/* Menu */}
              <nav class="menu">
                <Link to="/empty" style = {{ marginRight: 1 }}>Search for food information</Link>
                <Link to="/empty">Record Meal</Link>
                <Link to="/empty">Get Meal Ideas</Link>
                <Link to="/empty">Get Past Nutrition Records</Link>
              </nav>

              {/* Pages based on route */}
              <Routes>
                <Route path="/empty" element={<EmptyPage />} />
                <Route path="/empty" element={<EmptyPage />} />
              </Routes>
            </div>
          </Router>


          <div className="grid_container">
            <p className="item1">Search for food information</p>
            <p className="item2">Record meal eaten</p>
            <p className="item3">Get meal ideas</p>
            <p className="item4">Get records</p>
          </div>
        </div>
        <div className="columnRight">
          <img src={salad} alt="salad" height="400px" />
        </div>
      </div>
    );
}

export default HomePage;
