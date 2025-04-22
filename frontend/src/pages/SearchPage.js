import { useState, useEffect } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/token')
      .then(res => res.json())
      .then(data => setToken(data.access_token))
      .catch(err => console.error('Error fetching token', err));
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(searchTerm)}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      const foodList = data.foods?.food ?? [];
      setResults(Array.isArray(foodList) ? foodList : [foodList]);
    } catch (err) {
      console.error('Error searching food:', err);
    }
  };

  return (
    <div>
      <h2>Search for Food</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((food, index) => (
          <li key={index}>
            {food.food_name} - {food.food_description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
