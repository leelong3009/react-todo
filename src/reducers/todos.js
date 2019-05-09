import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            text,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
};

export default todos;
