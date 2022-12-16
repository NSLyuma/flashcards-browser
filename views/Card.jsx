const React = require('react');

function Card({ id, question, deckId }) {
  return (
    <div data-id={id}>
      <h5>{question}</h5>
      <form method="post" action={`/topicPage/${deckId}`}>
        <input type="text" name="user_answer" />
        <button type="submit">Ответить</button>
      </form>
    </div>
  );
}

module.exports = Card;
