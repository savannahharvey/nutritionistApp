// // home page
// import { Link } from 'react-router-dom';
// import salad from '../images/saladAI.jpeg';

// function HomePage() {
//   return (
//     <div className="container fade-in">
//       <div className="columnLeft">
//         <h1 style={{ color: '#333', fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Your Personal AI Nutritionist</h1>
//         <ul className="menu" style={{ listStyleType: "none" }}>
//           <li><Link to="/search">Search for food information</Link></li>
//           <li><Link to="/record">Record Meal</Link></li>
//           <li><Link to="/empty">Get Meal Ideas</Link></li>
//           <li><Link to="/empty">Get Past Nutrition Records</Link></li>
//         </ul>
//       </div>
//       <div className="columnRight">
//         <img src={salad} alt="salad" height="400px" />
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import { Link } from 'react-router-dom';
import React from "react";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
      {/* Hero Section */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "5rem 2rem", gap: "2rem", flexWrap: "wrap" }}>
        {/* Text Section */}
        <div style={{ maxWidth: "36rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "black", lineHeight: "1.2", marginBottom: "1.5rem" }}>
            Personal<br />
            Nutritionist<br />
            Recipe Book
          </h1>
          <p style={{ color: "#374151", fontSize: "1.125rem", marginBottom: "1.5rem" }}>
            Keep your recipes and track your nutrition in the same place!
          </p>
          <button style={{ backgroundColor: "white", border: "1px solid #d1d5db", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: "600" }}>
            Open Recipes
          </button>
        </div>

        {/* Image Section */}
        {/* Image Section */}
        <div style={{ flex: "1 1 50%", maxWidth: "50%", display: "flex", justifyContent: "center" }}>
          <img
            src="/images/saladAI.jpeg"
            alt="Chicken Salad Bowl"
            style={{ borderRadius: "1rem", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
