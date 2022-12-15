const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ Card, User }) {
      Deck.Cards = Deck.hasMany(Card, { foreignKey: 'deckId', as: 'card' });
      Deck.Rounds = Deck.belongsToMany(User, {
        through: 'Rounds',
        foreignKey: 'deckId',
        otherKey: 'userId',
        as: 'players',
      });
    }
  }
  Deck.init(
    {
      title: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Deck',
    }
  );
  return Deck;
};
