const React = require('react');

function TrueFalse({ text, id, rightAnswer }) {
  return (
    <div key={id}>
      <p>{text}</p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{rightAnswer}</p>
    </div>
  );
}

module.exports = TrueFalse;
