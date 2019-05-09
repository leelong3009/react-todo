import { SET_FILTER } from '../actions/actionTypes';
import { FILTER_TYPES } from '../util/constants';

const initialState = FILTER_TYPES.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filterType;
    default:
      return state;
  }
};

export default visibilityFilter;
