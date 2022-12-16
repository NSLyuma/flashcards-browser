const topicRouter = require('express').Router();
const { Deck } = require('../db/models');
const TopicPage = require('../views/TopicPage');

topicRouter.get('/topicPage', async (req, res) => {
  const deck = await Deck.findAll();
  res.renderComponent(TopicPage, { deck });
});

module.exports = topicRouter;
