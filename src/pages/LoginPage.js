import React from 'react';
import { Redirect } from 'react-router-dom';

const login = 'admin';
const password = 'admin';


class LoginPage extends React.Component {
    state = {
        loginValue: '',
        passwordValue: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.loginValue === login && this.state.passwordValue === password) {
            // permission = true
            console.log('ok');
            return <Redirect to='/admin' />
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

            <form>
                <label>Login:
                    <input onChange={this.handleLoginChange} type="text" />
                </label>
                <br />
                <label>Hasło:
                    <input onChange={this.handlePasswordChange} type="password" />
                </label>
                <br />
                <button onClick={this.handleSubmit}>Zaloguj</button>
            </form>

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