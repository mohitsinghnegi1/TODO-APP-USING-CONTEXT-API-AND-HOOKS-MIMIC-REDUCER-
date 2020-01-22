import React, { useContext } from 'react';
import context from './Store/Context';
export default function Todo(props) {
  var myContext = useContext(context);
  const changeStatus = (id) => {
    var i = 0;
    myContext.todos.forEach((element) => {
      if (element.id == id) {
        // ask dispacher to update global state
        var status = element.status == 'active' ? 'passive' : 'active';
        console.log('id', i);
        myContext.dispatch({
          type: 'EDIT_TODO',
          payload: { index: i, status }
        });
      }
      i += 1;
    });
  };
  const removeTodo = (id) => {
    myContext.dispatch({
      type: 'DEL_TODO',
      payload: id
    });
  };
  return (
    <div
      class={
        props.status == 'active'
          ? 'card text-white  mb-3 '
          : 'card text-white  mb-3 bg-info'
      }
      style={{
        borderRadius: '22px',
        border: '1px solid #fff',
        background: 'transparent'
      }}>
      <div class='card-body'>
        <p class='card-text' onClick={() => changeStatus(props.id)}>
          {props.val}
        </p>
      </div>
      <span
        onClick={() => removeTodo(props.id)}
        style={{
          position: 'absolute',
          right: '20px',
          top: '20px',
          cursor: 'pointer'
        }}>
        <i class='fa  fa-trash-o' aria-hidden='true'></i>
      </span>
    </div>
  );
}
