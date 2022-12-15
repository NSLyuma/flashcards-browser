const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Deck, Guess }) {
      Card.Deck = Card.belongsTo(Deck, { foreignKey: 'deckId', as: 'deck' });
      Card.Guess = Card.hasOne(Guess, { foreignKey: 'cardId', as: 'guess' });
    }
  }
  Card.init(
    {
      question: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
