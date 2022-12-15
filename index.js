require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const morgan = require('morgan');
const Home = require('./views/Home');

const app = express();

app.use(morgan('dev'));

app.locals.title = 'Flashcards';

app.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

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
