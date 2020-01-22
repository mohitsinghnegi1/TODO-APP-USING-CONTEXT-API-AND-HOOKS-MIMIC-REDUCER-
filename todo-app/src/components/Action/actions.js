export const addTodo = (state, dispatch) => {
  dispatch({ type: 'ADD_TODO', payload: state });
};
export const removeTodo = (id, dispatch) => {
  dispatch({
    type: 'DEL_TODO',
    payload: id
  });
};
export const editTodo = (index, status, dispatch) => {
  dispatch({
    type: 'EDIT_TODO',
    payload: { index, status }
  });
};
