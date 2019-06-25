import DuRequest from './core'

import { bind } from './helpers'

const instance = new DuRequest()

instance.interceptor.response.use(
    res => res.json(),
    err => ( { err, msg: 'something wrong...' } )
)

const curl: Function = bind(DuRequest.prototype.request, instance)

const use = (plugin: Function) => {
    if (typeof plugin !== 'function') return console.error('Error: plugin must be a function!')

    plugin(instance)
}

export { curl, use }