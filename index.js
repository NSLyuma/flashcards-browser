require('dotenv').config();
require('@babel/register');
// const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const expressConfig = require('./config/express');
const indexRouter = require('./routes/indexRouter');
const topicRouter = require('./routes/topic.router');
const db = require('./db/models');

// const staticDir = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3000;
const app = express();
expressConfig(app);
app.locals.title = 'Flashcards';

// app.use(morgan('dev'));
// прочесть тело запросов в формате urlencoded -> req.body
// app.use(express.urlencoded({ extended: true }));
// прочесть тело запросов в формате JSON -> req.body
// app.use(express.json());
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.
// app.use(express.static(staticDir));

app.use('/', indexRouter);
app.use('/topicPage', topicRouter);
/* eslint-disable no-console */
app
  .listen(PORT)
  .on('error', (error) => {
    console.log("Can't start server");
    console.log('Error:', error.message);
  })
  .on('listening', async () => {
    console.log('Server started successfully');
    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('Connected database successfully');
    } catch (error) {
      console.log("Can't connect database. ERROR: ", error.message);
    }
  });
/* eslint-enable no-console */
