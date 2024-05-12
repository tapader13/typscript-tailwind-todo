import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getTodos, setTodos } from '../features/storage';

const initialState: TodoState = {
  todos: getTodos(),
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addtodos: (
      state,
      action: PayloadAction<{
        title: Todo['title'];
        description: Todo['description'];
      }>
    ) => {
      const newTodo: Todo = {
        title: action.payload.title,
        description: action.payload.description,
        isComplete: false,
        id: String(Date.now()),
      };
      state.todos.push(newTodo);
      setTodos(state.todos);
    },
    deleteTodo: (
      state,
      action: PayloadAction<{
        id: Todo['id'];
      }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(index, 1);
      setTodos(state.todos);
    },
    savetodo: (
      state,
      action: PayloadAction<{
        id: Todo['id'];
        title: Todo['title'];
        description: Todo['description'];
      }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].description = action.payload.description;
      state.todos[index].title = action.payload.title;
      setTodos(state.todos);
    },
  },
});

export const { addtodos, deleteTodo, savetodo } = todoSlice.actions;

export default todoSlice.reducer;
