/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      userId: {
        allowNull: false,
        primaryKey: true,
        references: { model: 'Users', key: 'id' },
        type: Sequelize.INTEGER,
      },
      deckId: {
        allowNull: false,
        primaryKey: true,
        references: { model: 'Decks', key: 'id' },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Rounds', attributes);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Rounds');
  },
};
