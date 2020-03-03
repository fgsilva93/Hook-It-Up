import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Page from './Page'

const App = () => {

    return (
        <Router>
            <Fragment>
                <Link to="/">Go Home</Link>
                {/* <Link to="/people">people</Link> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id/details" component={Page} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
