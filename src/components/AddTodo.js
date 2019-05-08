import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.input} />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
