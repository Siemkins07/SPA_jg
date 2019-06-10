import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Panel from '../components/Panel';
import LoginPage from './LoginPage';


class AdminPage extends Component {
    state = {
        allow: false,
    }
    render() {
        return (
            <>
                {this.state.allow ? <Route component={Panel} /> : <Route componet={LoginPage} />}

            </>
        );
    }

}

export default AdminPage;