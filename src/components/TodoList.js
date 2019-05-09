import { connect } from 'react-redux';
import React from 'react';

const TodoList = ({ todos }) => (
  <ul className='todo-list'>
    {todos && todos.length
      ? todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })
      : 'No todos!!!'}
  </ul>
);

const mapStateToProps = state => {
  const { allIds, byIds } = state || {};
  const abc =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;

  return { abc };
};

export default connect(mapStateToProps)(TodoList);
