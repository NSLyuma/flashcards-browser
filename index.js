require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/indexRouter');

const app = express();

app.use(morgan('dev'));
const staticDir = path.join(__dirname, 'public');

app.locals.title = 'Flashcards';

// прочесть тело запросов в формате urlencoded -> req.body
app.use(express.urlencoded({ extended: true }));
// прочесть тело запросов в формате JSON -> req.body
app.use(express.json());
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.
app.use(express.static(staticDir));
app.use('/', indexRouter);

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
