import * as React from 'react'

export class Root extends React.Component<any, any> {
    renderDevTool() {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default;
            return <DevTools />;
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.props.children }
                { this.renderDevTool() }
            </React.Fragment>
        )
    }
}

export default Root