const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const axios = require('axios');

app.get('/api/token', async (req, res) => {
  try {
    const response = await axios.post('https://oauth.fatsecret.com/connect/token', 
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'basic'
      }), 
      {
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${process.env.FATSECRET_CLIENT_ID}:${process.env.FATSECRET_CLIENT_SECRET}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get token', details: error.message });
  }
});


app.get('/api/search', async (req, res) => {
    const query = req.query.query;
    const token = req.headers.authorization;
  
    try {
      const response = await axios.post(
        'https://platform.fatsecret.com/rest/server.api',
        new URLSearchParams({
          method: 'foods.search',
          search_expression: query,
          format: 'json'
        }),
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Search failed', details: error.message });
    }
});
