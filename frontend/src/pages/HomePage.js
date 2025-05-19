// home page
import { Link } from 'react-router-dom';
import salad from '../images/saladAI.jpeg';

function HomePage() {
  return (
    <div className="container fade-in">
      <div className="columnLeft">
        <h1 style={{ color: '#333', fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Your Personal AI Nutritionist</h1>
        <ul className="menu" style={{ listStyleType: "none" }}>
          <li><Link to="/search">Search for food information</Link></li>
          <li><Link to="/record">Record Meal</Link></li>
          <li><Link to="/empty">Get Meal Ideas</Link></li>
          <li><Link to="/empty">Get Past Nutrition Records</Link></li>
        </ul>
      </div>
      <div className="columnRight">
        <img src={salad} alt="salad" height="400px" />
      </div>
    </div>
  );
}

export default HomePage;
