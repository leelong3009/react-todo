import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <h1>Todo List</h1>
    <App />
    <TodoList />
    <Filter />
  </Provider>,
  document.getElementById('root')
);
