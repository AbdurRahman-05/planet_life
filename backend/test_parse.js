const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'g:\\PLANET_LIFE\\planet_life\\backend\\.env' });
const token = jwt.sign({ id: 1, email: 'planetlifeweb@gmail.com' }, process.env.JWT_SECRET, { expiresIn: '1h' });

fetch('http://localhost:3000/api/parse-package-document', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
  body: JSON.stringify({ text: "Day 1: Arrival in Maldives..." })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
