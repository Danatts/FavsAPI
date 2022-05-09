// Dev variables
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

// APP
const { app } = require('./app');

// Run server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
