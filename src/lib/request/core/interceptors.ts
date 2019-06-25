
/**
 * @description 拦截器
 */


export interface InterceptorInstance {
    handlers: Set<Function[]>

    use(resolved?: Function, rejected?: Function): void
    reducer(fn: Function): void
}

class InterceptorFactory implements InterceptorInstance{
	public handlers: Set<[ Function | undefined, Function | undefined ]>

	constructor() {
		this.handlers = new Set()
	}

	public use(resolved?: Function, rejected?: Function): void {
		this.handlers.add([resolved, rejected])
	}

	public reducer(fn: Function): void {
		this.handlers.forEach(handlerList => fn(handlerList))
	}
}

export default InterceptorFactory