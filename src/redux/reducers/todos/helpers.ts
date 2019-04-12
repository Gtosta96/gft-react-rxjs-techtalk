import { IAction } from '../../models/redux';
import { IState } from './todosReducer';

export function changeTodoColorHelper(state: IState, action: IAction<any>) {
  return state.todos.map(todo => {
    let newTodo = todo;
    if (todo === action.payload.todo) {
      const modifiedCopyFromSelectedTodo = { ...todo, color: action.payload.color };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}

export function moveTodoHelper(state: IState, action: IAction<any>) {
  return state.todos.map(todo => {
    let newTodo = todo;
    if (todo === action.payload.todo) {
      const modifiedCopyFromSelectedTodo = { ...todo, status: action.payload.status };
      newTodo = modifiedCopyFromSelectedTodo;
    }

    return newTodo;
  });
}
