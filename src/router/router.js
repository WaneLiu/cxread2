import React from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import history from './history';
import BookNavBar from '../components/bookNavBar';

const router = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={BookNavBar} />  
            <Route exact path="/bookshelves" component={BookNavBar} />
            <Route exact path="/selected" component={BookNavBar} />
            <Route exact path="/rank" component={BookNavBar} />
            <Route exact path="/my" component={BookNavBar} />
            <Route exact path="/search" component={BookNavBar} />
        </Switch>
    </Router>
)

export default router