import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';

import { ETodoColors, ETodoStatus, ITodo } from '../../models/todo';
import apiService from '../api';
import { changeTodoHelper, moveTodoHelper } from './helpers';

class TodosService {
  private todos$ = new rxjs.BehaviorSubject<ITodo[]>([]);

  private requestSubscription!: rxjs.Subscription;

  public colors: ETodoColors[] = [
    ETodoColors.RED,
    ETodoColors.PINK,
    ETodoColors.PURPLE,
    ETodoColors.DEEPPURPLE,
    ETodoColors.INDIGO,
    ETodoColors.BLUE,
    ETodoColors.CYAN,
    ETodoColors.TEAL,
    ETodoColors.GREEN,
    ETodoColors.LIGHTGREEN,
    ETodoColors.LIME,
    ETodoColors.YELLOW,
    ETodoColors.AMBER,
    ETodoColors.ORANGE,
    ETodoColors.DEEPORANGE,
    ETodoColors.BROWN
  ];

  private loadTodos = (): void => {
    this.requestSubscription = apiService
      .get("http://my-json-server.typicode.com/HerowayBrasil/04-react/todos")
      .pipe(
        rxjsOperators.map(xhr => xhr.response),
        rxjsOperators.tap(todos => this.todos$.next(todos))
      )
      .subscribe();
  };

  public getTodos = (cache: boolean = false): rxjs.Observable<ITodo[]> => {
    if (this.todos$.value.length === 0 || cache === false) {
      this.loadTodos();
    }

    return this.todos$.asObservable();
  };

  public cancelGetTodos = () => {
    this.requestSubscription.unsubscribe();
  };

  public addTodo = () => {
    const newTodo: ITodo = {
      id: Math.random().toString(),
      title: "",
      description: "",
      color: ETodoColors.RED,
      status: ETodoStatus.TODO
    };

    this.todos$.next([...this.todos$.value, newTodo]);
  };

  public changeTodo = (todo: ITodo, changes: Partial<ITodo>): void => {
    const updatedTodos = changeTodoHelper(this.todos$.value, todo.id, changes);
    this.todos$.next(updatedTodos);
  };

  public moveTodo = (todo: ITodo, status: ETodoStatus): void => {
    const updatedTodos = moveTodoHelper(this.todos$.value, todo.id, status);
    this.todos$.next(updatedTodos);
  };
}

const todosService = new TodosService();
export default todosService;
