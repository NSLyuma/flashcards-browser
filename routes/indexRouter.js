const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../views/Home');

indexRouter.get('/', (req, res) => {
  res.renderComponent(
    Home,
    req.app.locals,
  );
});

indexRouter.post('/', (req, res) => {

});

module.exports = indexRouter;
