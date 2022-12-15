const React = require('react');
const Layout = require('./Layout');

function Home({ title }) {
  return (
    <Layout>
      <header>
        <h1>{title}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Регистация</a>
          </li>
          <li>
            <a href="#">Войти</a>
          </li>
          <li>
            <a href="/">Главная</a>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

module.exports = Home;
