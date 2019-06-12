import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div>Copyright &#169; 2019 | Jacek Pobiarżyn
            <Route path="/" exact render={(props) => (
                <p>Jesteś na stronie <span>głównej</span> </p>
            )}
            />
            <Route path="/:page" exact render={(props) => (
                <p>Jesteś na stronie <span>{props.match.params.page}</span> </p>
            )}
            />
        </div>
    );
}

export default Footer;