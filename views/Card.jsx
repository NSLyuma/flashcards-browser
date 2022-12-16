const React = require('react');
const TrueFalse = require('./TrueFalse');

function Card({ id, question, deckId }) {
  return (
    <div
      data-id={id}
      className="isTrue"
      style={{ marginBottom: '30px', padding: '10px' }}
    >
      <h5>{question}</h5>
      <form
        className="userAnswer"
        method="post"
        action={`/topicPage/${deckId}`}
      >
        <input type="text" name="user_answer" />
        <button type="submit">Ответить</button>
      </form>
      <TrueFalse id={id} />
    </div>
  );
}

module.exports = Card;
