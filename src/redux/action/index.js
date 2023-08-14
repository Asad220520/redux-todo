export const addTodo = (el) => {
  return { type: "ADD_TODO", payload: el };
};
export const deteTodo = (el) => {
  return { type: "DELETE_TODO", payload: el };
};
