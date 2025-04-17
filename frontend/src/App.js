import { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/token')
    .then(res => res.json())
    .then(data => {
      console.log("Token fetched:", data.access_token); // 👈 Add this
      setToken(data.access_token);
    })
    .catch(err => console.error('Error fetching token, err'));
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return;
    console.log("Searching for:", searchTerm); // 👈 Add this
    try {
      const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(searchTerm)}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log("Search response:", data); // 👈 Add this
      setResults(data.food);

      const foodList = data.foods?.food ?? [];
      setResults(Array.isArray(foodList) ? foodList : [foodList]);
    } catch (err) {
      console.error('Error searching food:', err);
    }
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333' }}>🥦 My Nutritionist App</h1>
  
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for a food..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '250px',
            marginRight: '0.5rem'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>
  
      <div>
        {results.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {results.map((food, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <strong>{food.food_name}</strong>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{food.food_description}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#777' }}>No results yet. Try searching for a food above 👆</p>
        )}
      </div>
    </div>
  );  
}

export default App;