const express = require('express');
const cors = require('cors');
const { apiKey } = require('../config/apikey');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Middleware to check API key
function checkApiKey(req, res, next) {
  const { api_key } = req.query;

  if (api_key !== apiKey) {
    return res.status(403).json({ error: 'Forbidden, invalid API key.' });
  }

  next();
}

// Data for users
const users = [
    { name: 'Nashik', info:'Nashik, often called the "Wine Capital of India, is a blend of spirituality, history, and natural beauty. Visitors can explore the famous Trimbakeshwar Temple, dedicated to Lord Shiva, and take a spiritual journey at the Kalaram Sansthan Temple. The city is also known for its scenic vineyards like Sula, offering wine tasting tours. For nature lovers, the Saptashrungi Temple atop a hill and the Anjneri Hill trek are must-visit spots, while the ancient Pandav Leni Caves provide a glimpse into the city rich Buddhist history.' ,imageUrl:'https://media.istockphoto.com/id/1169952980/photo/ramkund-of-godavari-river-at-nashik-maharashtra.jpg?s=2048x2048&w=is&k=20&c=FBJlyQcKvLZ7NpiM9DCBFcTmGtMDcmSTmGDa2hJebLs=' },
    { name: 'Pune', info:'Pune is a vibrant city known for its cultural richness and educational prominence. Key attractions include the historical Shaniwar Wada, the iconic Aga Khan Palace, and the scenic Sinhagad Fort. For spiritual seekers, the Osho Ashram offers a peaceful retreat. The city’s pleasant weather, along with beautiful spots like the Pune University campus and Khadakwasla Dam, make it a perfect blend of tradition and modernity.',imageUrl:'https://images.herzindagi.info/image/2022/Oct/places-to-visit-in-pune.jpg' },
  { name: 'om', info:'kk' ,imageUrl:'https://img.freepik.com/free-photo/aurora-borealis-landscape-sea_23-2151387547.jpg'},
  { name: 'harak', info:'kk',imageUrl:'https://img.freepik.com/free-photo/aurora-borealis-landscape-sea_23-2151387547.jpg'},
];

// `/api/udata` endpoint
app.get('/api/udata', checkApiKey, (req, res) => {
  const { name } = req.query;
  
  if (name) {
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (user) {
      return res.json({
        message: 'User found!',
        data: user,
      });
    } else {
      return res.json({
        message: 'User not found.',
        data: null,
      });
    }
  } else {
    return res.json({
      message: 'Please provide a name to search.',
      data: null,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
