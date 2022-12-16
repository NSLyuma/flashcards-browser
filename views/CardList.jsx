const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

module.exports = function topicPage({ deckId, cards = [] }) {
  return (
    <Layout>
      <h2>Список вопросов</h2>
      <ul>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            question={card.question}
            deckId={deckId}
          />
        ))}
      </ul>
    </Layout>
  );
};
