import { IChangeTodo, IMoveTodo, IState } from './types';

export function changeTodoHelper(state: IState, action: IChangeTodo) {
  return state.todos.map(todo => {
    let newTodo = todo;
    if (todo === action.payload.todo) {
      const modifiedCopyFromSelectedTodo = { ...todo, ...action.payload.changes };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}

export function moveTodoHelper(state: IState, action: IMoveTodo) {
  return state.todos.map(todo => {
    let newTodo = todo;
    if (todo === action.payload.todo) {
      const modifiedCopyFromSelectedTodo = { ...todo, status: action.payload.status };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}
