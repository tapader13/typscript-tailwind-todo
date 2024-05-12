/// <reference types="vite/client" />
interface Todo {
  title: string;
  description: string;
  isComplete: boolean;
  id: string;
}
interface TodoState {
  todos: Todo[];
}
type EditTodo = {
  title: string;
  description: string;
  id: string;
};
