const React = require('react');

module.exports = function Deck({ title }) {
  return (
    <li>
      <a href="#">{title}</a>
    </li>
  );
};
