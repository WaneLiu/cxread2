import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import history from './history';
import BookNavBar from '../components/bookNavBar';

const router = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={BookNavBar} />
        </Switch>
    </Router>
)

export default router