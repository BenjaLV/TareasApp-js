import './style.css';

import { Todo, TodoList } from './js/classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todo.forEach( todo => crearTodoHtml( todo ) );

