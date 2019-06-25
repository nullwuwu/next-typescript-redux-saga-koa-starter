import TodoModel from 'app/demo/models/TodoModel';
import { STORE_TODO } from 'app/constants';
import { TodoStoreInstance, TodoStore } from './TodoStore';
export * from './TodoStore'

export interface defaultStoreConfigure {
    Todos?: TodoModel[]
}

export interface DemoModuleStoresInstance {
    [STORE_TODO]: TodoStoreInstance
}

export class DemoModuleStores implements DemoModuleStoresInstance{
    public [STORE_TODO]: TodoStoreInstance

    constructor(defaultConfigure: defaultStoreConfigure) {
        const { Todos } = defaultConfigure

        this[STORE_TODO] = new TodoStore(Todos)
    }
}

export const defaultConfigure: defaultStoreConfigure = {
    Todos: [
        new TodoModel('test111', true),
        new TodoModel('test222', false)
    ]
}

export default DemoModuleStores