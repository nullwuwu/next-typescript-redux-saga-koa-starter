import * as React from "react";
import { observer } from "mobx-react";

export const TodoView = observer(({ todo }) => 
    <li>
        <input type="checkbox" 
        defaultChecked={ todo.finished }
        onClick={ () => todo.finished = !todo.finished } />
        { todo.title }
    </li>
)


export default TodoView