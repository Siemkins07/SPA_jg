import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/LoginPage.css'


const UserLogin = 'admin';
const UserPassword = 'admin';
class LoginPage extends React.Component {

  state = {
    login: '',
    password: '',
    allow: false,
    move: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.login.length > 2 && this.state.password.length > 2) {
      if (this.state.login === UserLogin && this.state.password === UserPassword) {
        this.setState({
          allow: true
        })
      } else {
        this.setState({
          login: "",
          password: "",
          allow: false,
          move: true,
        })
        alert("niepoprawne dane")
      }
    } else return
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
    console.log(this.state.move + " move")
    return (
      <div className='login'>
        <form>
          <label>
            <input type="text" placeholder="Login" value={this.state.login} onChange={this.handleLoginChange} />
          </label>
          <br />
          <label>
            <input type="password" placeholder="Hasło" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <br />
          <button allow={String(this.state.allow)} onClick={this.handleSubmit}> Zaloguj
          </button>
          {this.state.allow && <Redirect to='/admin' />}
          {this.state.move && <Redirect to="/panel" />}
        </form>
      </div>
    )
  }
}

export default LoginPage;
