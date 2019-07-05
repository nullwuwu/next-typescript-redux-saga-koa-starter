import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router, Switch, Route } from 'react-router';

import 'normalize.css'
import 'app/assets/common.scss'

import Root from './Root';
import { routes } from './routers'
import { Header, Footer } from './components';


// render react Dom
export const App = hot(({ history }) => (
    <Root>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    {
                        routes.map((route, i) => (
                            <Route
                                key={i}
                                {...route}
                            />
                        ))
                    }
                </Switch>
                <Footer />
            </div>
        </Router>
    </Root>
))