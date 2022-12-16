const React = require('react');
const Layout = require('./Layout');

function Home({ title }) {
  return (
    <Layout>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="/free-icon-quiz-8586882.png"
                alt="Logo"
                width="30"
                height="25"
                className="d-inline-block align-text-top"
              />
              {title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Темы
                  </a>
                </li>
              </ul>
              <span className="navbar-text">From owls with love</span>
            </div>
          </div>
        </nav>
      </header>
    </Layout>
  );
}

module.exports = Home;
