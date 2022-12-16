const cardRouter = require('express').Router();
const { Deck, Card } = require('../db/models');
const CardList = require('../views/CardList');

cardRouter.get('/topicPage/:id', async (req, res) => {
  const deck = await Deck.findOne({ where: { id: req.params.id } });
  const cards = await Card.findAll({ where: { deckId: deck.id } });
  console.log(cards);
  res.renderComponent(CardList, { cards });
});

module.exports = cardRouter;
