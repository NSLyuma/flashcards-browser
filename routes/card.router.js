const cardRouter = require('express').Router();
const { Deck, Card, Guess } = require('../db/models');
const CardList = require('../views/CardList');
const TrueFalse = require('../views/TrueFalse');

cardRouter.get('/topicPage/:id', async (req, res) => {
  const deckId = req.params.id;
  const deck = await Deck.findOne({ where: { id: deckId } });
  const cards = await Card.findAll({
    where: { deckId: deck.id },
  });
  res.renderComponent(CardList, { deckId, cards });
});

cardRouter.post('/topicPage/:id', async (req, res) => {
  const userAnswer = req.body.userAnswer;
  const answer = await Guess.findOne({ where: { answer: userAnswer } });
  if (answer) {
    res.renderComponent(TrueFalse, { text: 'Верно' });
  } else {
    res.renderComponent(TrueFalse, { text: 'Неверно' });
  }
});

module.exports = cardRouter;
