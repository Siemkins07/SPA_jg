import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/LoginPage.css'

const login = 'admin';
const password = 'admin';
class LoginPage extends React.Component {

    state = {
        loginValue: '',
        passwordValue: '',
        allow: false,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.loginValue === login && this.state.passwordValue === password) {

            this.setState(state => ({
                allow: !state.allow
            }))
        } else {
            alert('niepoprawne dane');
        }
    }

    handleLoginChange = (e) => {
        this.setState({
            loginValue: e.target.value,
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            passwordValue: e.target.value
        })
    }

    render() {
        return (
            <div className='login'>
                <form allow={String(this.state.allow)}>
                    <input value={this.state.loginValue} placeholder="Login" onChange={this.handleLoginChange} type="text" />
                    <br />
                    <input value={this.state.passwordValue} placeholder="Hasło" onChange={this.handlePasswordChange} type="password" />
                    <br />
                    <button onClick={this.handleSubmit.bind(this)}>Zaloguj</button>
                    {this.state.allow ? <Redirect to='/admin' /> : null}
                </form>
            </div>
        )
    }
}

export default LoginPage;

// const LoginPage = () => {
//     return (
//         <div>
//             <form>
//                 <label htmlFor="">Login:
//                     <input type="text" />
//                 </label>
//                 <br />
//                 <label htmlFor="">Hasło:
//                     <input type="password" />
//                 </label>
//                 <br />
//                 <button>Zaloguj</button>
//             </form>
//         </div>
//     );
// }

// export default LoginPage;