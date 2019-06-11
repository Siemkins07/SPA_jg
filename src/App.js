import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import Page from './layouts/Page';
import Footer from './layouts/Footer'


class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className='app'>
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className='page'>
              {<Page sub={this.handleSubmit} />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;