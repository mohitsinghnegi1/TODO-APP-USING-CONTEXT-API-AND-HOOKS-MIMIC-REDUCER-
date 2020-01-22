import React, { useState, useContext } from 'react';
import context1 from './Store/Context';
import { addTodo } from './Action/actions';
export default function TodoForm() {
  const context = useContext(context1);
  const [state, setstate] = useState({
    todo: '',
    id:
      context.todos.length - 1 < 0
        ? 0
        : context.todos[context.todos.length - 1].id + 1,
    status: 'active'
  });
  const updateState = (e) => {
    e.preventDefault();
    const a = e.target.value;
    setstate({ ...state, todo: a });
  };
  const addTodoIntoList = (e) => {
    e.preventDefault();
    if (state.todo.trim().length > 0) {
      addTodo(state, context.dispatch);
      setstate({ todo: '', id: state.id + 1, status: 'active' });
    }
  };
  return (
    <React.Fragment>
      <form className='todo-form btn-group' onSubmit={addTodoIntoList}>
        <input
          type='text'
          placeholder='Enter Todo '
          name='todo'
          value={state.name}
          onChange={updateState}
        />
        <button type='submit' value='Add Todo' className='d-flex'>
          <i class='fa fa-plus pr-3 m-auto' aria-hidden='true'></i>{' '}
          <i className='d-none d-lg-block m-auto'>Todo</i>
        </button>
      </form>
    </React.Fragment>
  );
}
