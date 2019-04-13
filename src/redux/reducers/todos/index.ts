import { Action } from 'redux';
import * as reduxObservable from 'redux-observable';
import * as rxjs from 'rxjs';
import { ajax as rxjsAjax } from 'rxjs/ajax';
import * as rxjsOperators from 'rxjs/operators';

import { IAction } from '../../models/redux';
import { ETodoColors, ETodoStatus, ITodo } from '../../models/todo';
import { changeTodoHelper, moveTodoHelper } from './helpers';
import { EActions, IAddTodo, IChangeTodo, IMoveTodo, IState } from './types';

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  todos: [],
  colors: [
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
  ]
};
export default function reducer(state = INITIAL_STATE, action: IAction<any>): IState {
  switch (action.type) {
    case EActions.ADD_TODO:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: state.todos.concat(action.payload),
        colors: state.colors
      };

    case EActions.CHANGE_TODO:
    case EActions.CHANGE_TODO:
    case EActions.CHANGE_TODO:
    case EActions.CHANGE_TODO:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: changeTodoHelper(state, action as IChangeTodo),
        colors: state.colors
      };

    case EActions.MOVE_TODO:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: moveTodoHelper(state, action as IMoveTodo),
        colors: state.colors
      };

    case EActions.HTTP_GET_TODOS:
      return {
        isFetching: true,
        hasErrors: state.hasErrors,
        todos: state.todos,
        colors: state.colors
      };

    case EActions.HTTP_GET_TODOS_SUCCESS:
      return {
        isFetching: false,
        hasErrors: false,
        todos: action.payload,
        colors: state.colors
      };

    case EActions.HTTP_GET_TODOS_FAIL:
      return {
        isFetching: false,
        hasErrors: true,
        todos: INITIAL_STATE.todos,
        colors: state.colors
      };

    default:
      return state;
  }
}

export const addTodo = (): IAddTodo => ({
  type: EActions.ADD_TODO,
  payload: {
    id: Math.random().toString(),
    title: "",
    description: "",
    color: ETodoColors.RED,
    status: ETodoStatus.TODO
  }
});

export const changeTodo = (todo: ITodo, changes: Partial<ITodo>): IChangeTodo => ({
  type: EActions.CHANGE_TODO,
  payload: { todo, changes }
});

export const moveTodo = (todo: ITodo, status: ETodoStatus): IMoveTodo => ({
  type: EActions.MOVE_TODO,
  payload: { todo, status }
});

export const getTodos = () => ({
  type: EActions.HTTP_GET_TODOS
});

export const getTodosEpic = (action$: rxjs.Observable<Action>): rxjs.Observable<Action> =>
  action$.pipe(
    reduxObservable.ofType(EActions.HTTP_GET_TODOS),
    rxjsOperators.mergeMap(() =>
      rxjsAjax.get(`http://my-json-server.typicode.com/HerowayBrasil/04-react/todos`).pipe(
        rxjsOperators.map(hxr => ({
          type: EActions.HTTP_GET_TODOS_SUCCESS,
          payload: hxr.response
        })),
        rxjsOperators.catchError(error =>
          rxjs.of({ type: EActions.HTTP_GET_TODOS_FAIL, payload: error })
        )
      )
    )
  );
