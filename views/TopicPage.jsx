const React = require('react');
const Deck = require('./Deck');
const Layout = require('./Layout');

module.exports = function topicPage({ deck = [] }) {
  return (
    <Layout>
      <h2>Список тем</h2>
      <ul>
        {deck.map((item) => (
          <Deck key={item.id} id={item.id} title={item.title} />
        ))}
      </ul>
    </Layout>
  );
};
