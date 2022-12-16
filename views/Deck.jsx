const React = require('react');

module.exports = function Deck({ id, title }) {
  return (
    <li>
      <a href={`/topicPage/${id}`}>{title}</a>
    </li>
  );
};
