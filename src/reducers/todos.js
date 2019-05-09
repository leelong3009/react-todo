const initialState = {
  allIds: [],
  byIds: {}
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
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
    default:
      return state;
  }
};

export default todos;
