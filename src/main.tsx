import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';
import { App } from './app';
import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';

const history = createBrowserHistory()
const rootStore = createStores(history)

ReactDOM.render(
    <Provider { ...rootStore }>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
)