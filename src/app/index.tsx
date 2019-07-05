import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router, Switch, Route } from 'react-router';

import 'normalize.css'
import Root from './Root';
import { routes } from './routers'


// render react Dom
export const App = hot(({ history }) => (
    <Root>
        <Router history={history}>
            {/* <Switch>
                <Route path='/' component={TodoListView}/>
            </Switch> */}
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
        </Router>
    </Root>
))