const React = require('react');

function Card({ question }) {
  return (
    <div data-id={question.id}>
      <h3>{question.question}</h3>
      <form method="post" action="/">
        <input type="text" name="user_answer" />
        <button type="submit">Ответить</button>
      </form>
    </div>
  );
}

module.exports = Card;
