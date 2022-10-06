import { v4 as uuidv4 } from 'uuid';

export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuidv4(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
