const express = require('express');
const app = express();
const configExpress = require('./config/express');

// Configuration
configExpress(app);

app.get('/', (req, res) => {
  res.json('Favs API');
});

module.exports = { app };
