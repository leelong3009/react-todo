import { connect } from 'react-redux';
import React from 'react';
import { getTodosByVisibility } from '../util/selector';
import { toogleTodo } from '../actions/todoAction';

const TodoList = ({ todos, toogleTodo }) => (
  <h1>Todo List</h1>
  <ul className='todo-list'>
    {todos && todos.length
      ? todos.map(todo => {
          return (
            <li
              key={todo.id}
              onClick={() => toogleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </li>
          );
        })
      : 'No todos!!!'}
  </ul>
);

export default connect(
  state => ({
    todos: getTodosByVisibility(state, state.visibilityFilter)
  }),
  { toogleTodo }
)(TodoList);
