export const setTodos = (todos: Todo[]) => {
  console.log(2);
  localStorage.setItem('todosTcss', JSON.stringify(todos));
};
export const getTodos = (): Todo[] => {
  const item = localStorage.getItem('todosTcss');
  console.log(item);
  console.log(1);
  return item ? JSON.parse(item) : [];
};
