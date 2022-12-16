const React = require('react');

module.exports = function Deck({ id, title }) {
  return (
    <li>
      <a href={`/topicPage/${id}`} className="list-group-item list-group-item-action"
      >{title}</a>
    </li>
  );
};
