import AddTodo from './AddTodo';
import React, { Component } from 'react';

class App extends Component {
  addTodo = input => {
    console.log('value ' + input);
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
