import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/todoAction';
import { FILTER_TYPES } from '../util/constants';

const Filter = ({ setFilter }) => (
  <React.Fragment>
    <button onClick={() => setFilter(FILTER_TYPES.ALL)}>All</button>
    <button onClick={() => setFilter(FILTER_TYPES.COMPLETED)}>Completed</button>
    <button onClick={() => setFilter(FILTER_TYPES.INCOMPLETED)}>
      Incompleted
    </button>
  </React.Fragment>
);

export default connect(
  null,
  { setFilter }
)(Filter);
