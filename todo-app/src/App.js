import React, { useContext, useReducer, useEffect } from 'react';
import context from './components/Store/Context';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import reducer from './components/Reducer/reducer';
import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome';
import Footer from './components/Footer';
function App() {
  const value = useContext(context);
  const todoData = JSON.parse(localStorage.getItem('data'));
  const [state, dispatch] = useReducer(reducer, todoData || value);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  return (
    <context.Provider
      value={{
        todos: state.todos,
        dispatch
      }}>
      <div className='App '>
        <div
          className='container  d-flex mt-5 mb-4'
          style={{ minHeight: '80vh' }}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
      <Footer />
    </context.Provider>
  );
}

export default App;
