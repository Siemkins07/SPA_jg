import React from 'react';
import '../styles/Header.css';
import { Route, Switch } from 'react-router-dom';
import HeaderImage from '../components/HeaderImage'
import img0 from '../images/start.jpg';

const Header = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <>
                        <div>
                            <h1>Jestem graczem</h1>
                            <p>Historia Test Drive Unlimited okiem Siemkinsa</p>
                        </div>
                        <img src={img0} alt='foto' />
                    </>
                )} />
                <Route path="/book" component={HeaderImage} />
                <Route path="/chapters" component={HeaderImage} />
                <Route path="/contact" component={HeaderImage} />
                <Route path="/admin" component={HeaderImage} />
                <Route path="/login" component={HeaderImage} />
                <Route render={() => (
                    <img src={img0} alt='foto' />
                )} />
            </Switch>
        </>

    );
}

export default Header;