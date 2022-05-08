const express = require('express');
const app = express();
const configExpress = require('./config/express');
const connectDB = require('./config/database');

// Configuration
configExpress(app);
connectDB(process.env.MONGO_DB_URI);

app.get('/', (req, res) => {
  res.send('Favs API');
});

module.exports = { app };
