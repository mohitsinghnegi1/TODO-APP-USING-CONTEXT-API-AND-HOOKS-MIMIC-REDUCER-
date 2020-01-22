import React from 'react';
function editTodo(state, index, status) {}
export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'EDIT_TODO':
      const newTodo = {
        ...state.todos[action.payload.index],
        status: action.payload.status
      };
      const newTodos = [
        ...state.todos.slice(0, action.payload.index),
        newTodo,
        ...state.todos.slice(action.payload.index + 1)
      ];

      return {
        ...state,
        todos: newTodos
      };
    case 'DEL_TODO':
      // console.log('del ', action.payload);
      const newTodos1 = state.todos.filter((todo) => {
        // console.log(todo.id != action.payload.id, todo.id, action.payload);
        return todo.id != action.payload;
      });
      // console.log('del todo ', { ...state, todos: newTodos1 });
      return { ...state, todos: newTodos1 };
    default:
      return state;
  }
}
