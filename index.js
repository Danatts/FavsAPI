if (process.env.NODE_ENV === 'development'){
  require('dotenv').config();
};

const { app } = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
})
