const React = require('react');

function Card({ id, question }) {
  return (
    <div data-id={id}>
      <h5>{question}</h5>
      <form method="post" action="/">
        <input type="text" name="user_answer" />
        <button type="submit">Ответить</button>
      </form>
    </div>
  );
}

module.exports = Card;
