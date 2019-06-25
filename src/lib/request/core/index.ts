/**
 * @description 请求库
 */

import InterceptorFactory, { InterceptorInstance } from "./interceptors";
import request from './fetch'


export interface TypeInterceptor {
    request: InterceptorInstance
    response: InterceptorInstance
}

export interface DuRequestInstance {
    interceptor: TypeInterceptor

    fetch(url: string, options?: object): any
    request(url: string, options?: object): Promise<any>
}

class DuRequest implements DuRequestInstance{
    public interceptor: TypeInterceptor

    constructor() {
        this.interceptor = {
            request: new InterceptorFactory(),
            response: new InterceptorFactory()
        }
    }

    fetch(url: string, options?: object) {
        return () => request(url, options)
    }

    request(url: string, options?: object) {
        let promise = Promise.resolve(options)

        const chain: Array<Array<Function | any>> = [ [ this.fetch(url, options), undefined ] ]

        this.interceptor.request.reducer(handlerList => chain.unshift(handlerList))
        this.interceptor.response.reducer(handlerList => chain.push(handlerList))

        // excute chain inteceptor

        while(chain.length) {
            promise = promise.then(...chain.shift())
        }

        return promise
    }
}

export default DuRequest