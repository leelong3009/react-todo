import { FILTER_TYPES } from './constants';

export const getAllTodos = state => {
  const { allIds, byIds } = state.todos || {};
  if (allIds && allIds.length) {
    return allIds.map(id => {
      return { ...byIds[id], id };
    });
  } else {
    return [];
  }
};

export const getTodosByVisibility = (state, filter) => {
  const todos = getAllTodos(state);
  switch (filter) {
    case FILTER_TYPES.ALL:
      return todos;
    case FILTER_TYPES.COMPLETED:
      return todos.filter(todo => todo.completed);
    case FILTER_TYPES.INCOMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
