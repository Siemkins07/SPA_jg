import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import ChapterListPage from '../pages/ChapterListPage';
import ChapterPage from '../pages/ChapterPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import AdminPage from '../pages/AdminPage';
import Panel from '../components/Panel';

const Page = (props) => {
    console.log(props.allow + " props allow w page");
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/book" component={BookPage} />
                <Route path='/chapters' component={ChapterListPage} />
                <Route path='/chapter/:id' component={ChapterPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} allow={props.allow} login={props.login} password={props.password} />
                <Route path="/panel" component={Panel} allow={props.allow} login={props.login} password={props.password} />
                <Route component={ErrorPage} />
            </Switch>
        </>

    );
}

export default Page;