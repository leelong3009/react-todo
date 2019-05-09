import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text: text
});

export const toogleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const setFilter = filterType => ({
  type: SET_FILTER,
  filterType: filterType
});
