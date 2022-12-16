const React = require('react');
const Deck = require('./Deck');
const Layout = require('./Layout');

module.exports = function topicPage({ deck = [] }) {
  return (
    <Layout>
      <div className="list-group">
        <a
          href="/"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Главная
        </a>
        <h2
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Список тем
        </h2>
      </div>
      <h2 />
      <ul style={{ listStyleType: 'none' }}>
        {deck.map((item) => (
          <Deck key={item.id} id={item.id} title={item.title} />
        ))}
      </ul>
    </Layout>
  );
};
