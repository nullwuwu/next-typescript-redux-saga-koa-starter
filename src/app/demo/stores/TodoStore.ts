import { observable, computed } from "mobx";
import { TodoModel } from "app/demo/models";

export interface TodoStoreInstance {
    todos: TodoModel[]
    unfinishedTodoCount: number
}

export class TodoStore implements TodoStoreInstance{
    constructor(fixtures: TodoModel[]) {
        this.todos = fixtures
    }

    @observable public todos: Array<TodoModel>

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
}

export default TodoStore