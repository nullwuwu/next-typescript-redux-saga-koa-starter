import * as React from 'react'
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from 'react-router';
import { STORE_ROUTER, STORE_TODO } from 'app/constants';
import { RouterStore, TodoStore } from 'app/stores';
import { TodoView } from 'app/components';

export interface TodoListProps extends RouteComponentProps<any> {
    [STORE_ROUTER]: RouterStore,
    [STORE_TODO]: TodoStore
}

export interface TodoListState {

}

@inject(STORE_ROUTER, STORE_TODO)
@observer
export default class TodoListView extends React.Component<TodoListProps, TodoListState> {
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.props.todo.todos.map(todo =>
                            <TodoView todo={todo} key={todo.id}/>
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }
}
