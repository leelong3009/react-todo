import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers/todos';

const store = createStore(todos);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <h1>Todo List</h1>
    <App />
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
