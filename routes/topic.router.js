const topicRouter = require('express').Router();
const TopicPage = require('../views/TopicPage');

topicRouter.get('/', async (req, res) => {
  res.renderComponent(TopicPage);
});

module.exports = topicRouter;
