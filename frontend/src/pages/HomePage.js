// home page
import { Link } from 'react-router-dom';
import salad from '../images/saladAI.jpeg';

function HomePage() {
    return (
      <div className="container fade-in">
        <div className="columnLeft">
          <h1 style={{ color: '#333', fontSize: '3rem', textAlign: 'center' }}>Your Personal AI Nutritionist</h1>

          <div className="menu">
            <Link to="/empty">Search for food information</Link>
            <Link to="/empty">Record Meal</Link>
            <Link to="/empty">Get Meal Ideas</Link>
            <Link to="/empty">Get Past Nutrition Records</Link>
          </div>
        </div>
        <div className="columnRight">
          <img src={salad} alt="salad" height="400px" />
        </div>
      </div>
    );
}

export default HomePage;
