import { ETodoStatus, ITodo } from '../../../models/todo';

export function changeTodoHelper(
  todos: ITodo[],
  todoToChange: ITodo,
  modifiedTodo: Partial<ITodo>
) {
  return todos.map(todo => {
    let newTodo = todo;

    if (newTodo.id === todoToChange.id) {
      const modifiedCopyFromSelectedTodo = { ...todoToChange, ...modifiedTodo };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}

export function moveTodoHelper(todos: ITodo[], todoToMove: ITodo, status: ETodoStatus) {
  return todos.map(todo => {
    let newTodo = todo;

    if (newTodo.id === todoToMove.id) {
      const modifiedCopyFromSelectedTodo = { ...todoToMove, status };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}
