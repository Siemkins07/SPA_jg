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
import NoAccessPage from '../pages/NoAccessPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/book" component={BookPage} />
                <Route path='/chapters' component={ChapterListPage} />
                <Route path='/chapter/:id' component={ChapterPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/panel" component={NoAccessPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;