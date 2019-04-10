import { ETodoStatus, ITodo } from '../../models/todo';

export interface ISegregatedTodos {
  todo: ITodo[];
  doing: ITodo[];
  done: ITodo[];
}
export function segregateByStatus(todos: ITodo[]): ISegregatedTodos {
  const initialValue: ISegregatedTodos = {
    todo: [],
    doing: [],
    done: []
  };

  return todos.reduce((prev, todo) => {
    switch (todo.status) {
      case ETodoStatus.TODO:
        prev.todo.push(todo);

      case ETodoStatus.DOING:
        prev.doing.push(todo);

      case ETodoStatus.DONE:
        prev.done.push(todo);
    }

    return prev;
  }, initialValue);
}
