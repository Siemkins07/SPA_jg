import React from 'react';
import { Route } from 'react-router-dom';
import Panel from '../components/Panel';


const AdminPage = () => {
    return (
        <Route component={Panel} />
    );
}

export default AdminPage;