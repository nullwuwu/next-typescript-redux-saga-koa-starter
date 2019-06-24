import { observable, computed } from "mobx";
import { TodoModel } from "app/models";

class TodoStore {
    constructor(fixtures: TodoModel[]) {
        this.todos = fixtures
    }

    @observable public todos: Array<TodoModel>

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
}

export default TodoStore