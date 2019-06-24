import { observable } from "mobx";

export class TodoModel {
    readonly id: number
    @observable title = "";
    @observable finished = false;

    constructor(title: string, finished: boolean) {
        this.id = TodoModel.generatedId()
        this.title = title
        this.finished = finished
    }

    static nextId = 1
    static generatedId() {
        return this.nextId++
    }
}

export default TodoModel