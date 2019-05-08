const initialState = {
  allIds: []
};

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      const { id } = action;
      return {
        ...state,
        allIds: [...state.allIds, id]
      };
    default:
      return state;
  }
};

export default todos;
