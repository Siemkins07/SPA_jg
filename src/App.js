import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import Page from './layouts/Page';
import Footer from './layouts/Footer'

const login = 'admin';
const password = 'admin';
class App extends Component {
  state = {
    allow: false,
    login: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.login === login && this.state.password === password) {
      this.setState({
        allow: true
      })

    } else {
      alert('niepoprawne dane');
    }
  }

  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    console.log(this.state.allow + " props allow w app");
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
              {<Page allow={this.state.allow} login={this.state.login} password={this.state.password} />}
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
