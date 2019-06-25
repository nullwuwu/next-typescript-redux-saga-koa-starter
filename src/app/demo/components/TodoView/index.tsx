import * as React from "react";
import { observer } from "mobx-react";

import * as style from './index.scss'

export const TodoView = observer(({ todo }) => 
    <li>
        <input type="checkbox" 
        defaultChecked={ todo.finished }
        onClick={ () => todo.finished = !todo.finished } />
        <span className={ style.red }> { todo.title } </span>
    </li>
)


export default TodoView