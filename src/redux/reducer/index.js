const initialState = {
  todo: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: state.todo.length
              ? state.todo[state.todo.length - 1].id + 1
              : 1,
            title: action.payload,
            img: action.payload,
          },
        ],
      };
    }
    case "DELETE_TODO":
      return {
        ...state,
        todo: [...state.todo.filter((el) => el.id !== action.payload)],
      };
    default:
      return state;
  }
};
