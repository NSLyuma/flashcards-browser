const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Guess extends Model {
    static associate({ Card }) {
      Guess.Card = Guess.belongsTo(Card, { foreignKey: 'cardId', as: 'card' });
    }
  }
  Guess.init(
    {
      answer: DataTypes.TEXT,
      cardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Guess',
    }
  );
  return Guess;
};
