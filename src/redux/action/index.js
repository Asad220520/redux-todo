export const addTodo = (el, r) => {
  return { type: "ADD_TODO", payload: el, r };
};
export const deteTodo = (el) => {
  return { type: "DELETE_TODO", payload: el };
};
