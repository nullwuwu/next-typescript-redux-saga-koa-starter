import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';
import { App } from './app';
import { TodoModel } from 'app/models';
import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';

const defaultTodos = [
    new TodoModel('1232313', false),
    new TodoModel('455555', true),
]

const history = createBrowserHistory()
const rootStore = createStores(history, { Todos: defaultTodos })


ReactDOM.render(
    <Provider { ...rootStore }>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
)