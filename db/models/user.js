const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Deck }) {
      User.Rounds = User.belongsToMany(Deck, {
        through: 'Rounds',
        foreignKey: 'userId',
        otherKey: 'deckId',
        as: 'decks',
      });
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
