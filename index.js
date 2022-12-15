const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {});

/* eslint-disable no-console */
app
  .listen(3000)
  .on('error', (error) => {
    console.log("Can't start server");
    console.log('Error:', error.message);
  })
  .on('listening', () => {
    console.log('Server started successfully');
  });
/* eslint-enable no-console */
