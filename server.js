const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = 3000;

// Basic Authentication
app.use(basicAuth({
  users: { 'admin': 'password123' }, // Username: admin, Password: password123
  challenge: true
}));

// Serve dynamic HTML
app.get('/', (req, res) => {
  const name = req.auth.user; // From basic auth
  res.send(`
    <html>
      <head><title>Dashboard</title></head>
      <body>
        <h1>Welcome, ${name}!</h1>
        <p>This is a protected dynamic HTML page served from Node.js.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
