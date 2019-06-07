import React from 'react';
import { Redirect } from 'react-router-dom';

let permission = false;

const Panel = () => {



    return (

        permission ? (<p>Witaj w panelu administratora :)</p>) : (<Redirect to="/login" />)
    )
}

export default Panel;