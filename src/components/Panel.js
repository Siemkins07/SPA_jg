import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';


const Panel = (props) => {
    console.log(props.allow + " props allow w panel");

    return (
        props.allow ? <Route component={AdminPage} allow={props.allow} login={props.login} password={props.password} /> : <Route componet={LoginPage} allow={props.allow} login={props.login} password={props.password} />
    );
}
export default Panel;
