const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

module.exports = function topicPage({ cards = [] }) {
  console.log(cards[0]);
  return (
    <Layout>
      <h2>Список вопросов</h2>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} question={card.question} />
        ))}
      </ul>
    </Layout>
  );
};
