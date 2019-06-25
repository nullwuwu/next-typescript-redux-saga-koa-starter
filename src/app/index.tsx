import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router, Route, Switch } from 'react-router'
import { Root } from 'app/demo/containers/Root';
import TodoListView from 'app/demo/containers/TodoList';


// render react Dom
export const App = hot(({ history }) => (
    <Root>
        <Router history={history}>
            <Switch>
                <Route path='/' component={TodoListView}/>
            </Switch>
        </Router>
    </Root>
))