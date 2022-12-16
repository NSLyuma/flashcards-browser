const React = require('react');

function TrueFalse({ text, id }) {
  return <div key={id}>{text}</div>;
}

module.exports = TrueFalse;
