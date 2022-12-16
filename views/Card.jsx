const React = require('react');

function Card({ card }) {
  return (
    <div data-id={card.id}>
      <h3>{card.question}</h3>
      <form method="post" action="/">
        <input type="text" name="user_answer" />
        <button type="submit">Ответить</button>
      </form>
    </div>
  );
}

module.exports = Card;
