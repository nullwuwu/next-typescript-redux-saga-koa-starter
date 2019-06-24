import { History } from "history";
import TodoModel from "app/models/TodoModel";
import RouterStore from "./RouterStore";
import TodoStore from "./TodoStore";
import { STORE_ROUTER, STORE_TODO } from '../constants/stores';

export interface defaultStoreConfigure {
    Todos?: TodoModel[]
}

export function createStores(history: History, defaultConfigure: defaultStoreConfigure) {
    const { Todos } = defaultConfigure

    const routerStore = new RouterStore(history)
    const todoStore = new TodoStore(Todos)

    return {
        [STORE_ROUTER]: routerStore,
        [STORE_TODO]: todoStore
    }
}