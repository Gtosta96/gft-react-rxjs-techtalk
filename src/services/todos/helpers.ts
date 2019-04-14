import { ETodoStatus, ITodo } from '../../models/todo';

export function changeTodoHelper(todos: ITodo[], todoId: ITodo["id"], changes: Partial<ITodo>) {
  return todos.map(todo => {
    let newTodo = todo;
    if (todo.id === todoId) {
      const modifiedCopyFromSelectedTodo = { ...todo, ...changes };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}

export function moveTodoHelper(todos: ITodo[], todoId: ITodo["id"], status: ETodoStatus) {
  return todos.map(todo => {
    let newTodo = todo;
    if (todo.id === todoId) {
      const modifiedCopyFromSelectedTodo = { ...todo, status };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}
