import React, { useContext } from 'react';
import context from './Store/Context';
import Todo from './Todo';
export default function TodoList() {
  const mycontext = useContext(context);
  console.log(mycontext.dispatch, 'List Data');

  const showtodo = mycontext.todos.map((element) => {
    return (
      <Todo
        val={element.todo}
        key={element.id}
        id={element.id}
        status={element.status}
      />
    );
  });
  console.log(mycontext.todos);
  return <div>{showtodo}</div>;
}
