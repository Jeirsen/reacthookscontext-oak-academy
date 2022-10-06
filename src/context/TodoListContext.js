import React, { createContext, useReducer } from 'react';
import { todosReducer } from '../reducers/todosReducer';
import { v4 as uuidv4 } from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvided = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: uuidv4(), text: 'Learn React' },
    { id: uuidv4(), text: 'Learn React Hooks/Context' },
    { id: uuidv4(), text: 'React TypeScript' },
  ]);

  // const [todos, setTodos] = useState([
  //   { id: uuidv4(), text: 'Learn React' },
  //   { id: uuidv4(), text: 'Learn React Hooks/Context' },
  //   { id: uuidv4(), text: 'React TypeScript' },
  // ]);

  // const addTodo = (text) => {
  //   setTodos([...todos, { id: uuidv4(), text }]);
  // };

  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvided;
