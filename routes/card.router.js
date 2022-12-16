const cardRouter = require('express').Router();
const { Deck, Card, Guess } = require('../db/models');
const CardList = require('../views/CardList');

cardRouter.get('/topicPage/:id', async (req, res) => {
  const deckId = req.params.id;
  const deck = await Deck.findOne({ where: { id: deckId } });
  const cards = await Card.findAll({ where: { deckId: deck.id } });
  res.renderComponent(CardList, { deckId, cards });
});

cardRouter.post('/topicPage/:id', async (req, res) => {
  const deckId = req.params.id;
  const userAnswer = req.body.user_answer;
  // если пользователь ответил правильно - answer будет объектом
  // если неправильно - answer = null
  const answer = await Guess.findOne({ where: { answer: userAnswer } });
  res.redirect(`/topicPage/${deckId}`);
});

module.exports = cardRouter;
