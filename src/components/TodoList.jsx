import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { TodoListContext } from '../context/TodoListContext';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      dispatch({ type: 'ADD_TODO', payload: todo });
      setTodo('');
    }
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        padding: '20px 10px',
        textAlign: 'center',
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
              {todo.text}
            </p>
          );
        })
      ) : (
        <p>You have no todos!</p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add todo:</label>
        <div className="ui input">
          <input type="text" id="todo" onChange={handleChange} value={todo} />
        </div>
        <input type="submit" value="Add Todo" className="ui button primary" />
      </form>

      <br />
      <button className="ui button primary" onClick={changeTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default TodoList;
