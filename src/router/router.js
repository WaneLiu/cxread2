import React from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import history from './history';
import BookNavBar from '../components/bookNavBar';
import BookDetail from '../pages/bookDetailPage';

const router = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={BookNavBar} />  
            <Route exact path="/bookshelves" component={BookNavBar} />
            <Route exact path="/selected" component={BookNavBar} />
            <Route exact path="/rank" component={BookNavBar} />
            <Route exact path="/my" component={BookNavBar} />
            <Route exact path="/search" component={BookNavBar} />
            <Route exact path="/bookDetail" component={BookDetail} />
        </Switch>
    </Router>
)

export default router