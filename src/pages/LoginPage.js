import React from 'react';
// import { Redirect } from 'react-router-dom';
import '../styles/LoginPage.css'


const LoginPage = (props) => {
    console.log(props.allown + " props allow w loginPage");

    return (
        <div className='login'>
            <form >
                <label htmlFor=""  >
                    <input type="text" placeholder="Login" allow={props.allow} login={props.login} />
                </label>
                <br />
                <label htmlFor="" allow={props.allow} password={props.password} >
                    <input type="password" placeholder="Hasło" />
                </label>
                <br />
                <button>Zaloguj</button>
            </form>
        </div>
    );
}



export default LoginPage;