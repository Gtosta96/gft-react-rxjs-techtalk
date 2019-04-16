import { Action } from 'redux';

import { ETodoColors, ETodoStatus, ITodo } from '../../models/todo';

/**
 * Actions
 */
export enum EActions {
  ADD_TODO = "@todos/ADD_TODO",
  CHANGE_TODO = "@todos/CHANGE_TODO",
  MOVE_TODO = "@todos/MOVE_TODO",

  HTTP_GET_TODOS = "@todos/HTTP_GET_TODOS",
  HTTP_GET_TODOS_SUCCESS = "@todos/HTTP_GET_TODOS_SUCCESS",
  HTTP_GET_TODOS_FAIL = "@todos/HTTP_GET_TODOS_FAIL",

  CANCEL_GET_TODOS = "@todos/CANCEL_GET_TODOS"
}

/**
 * State
 */
export interface IState {
  readonly isFetching: boolean;
  readonly hasErrors: boolean;
  readonly todos: ITodo[];
  readonly colors: ETodoColors[];
}

/**
 * Action Creators
 */
export interface IAddTodo extends Action<EActions.ADD_TODO> {
  payload: ITodo;
}

export interface IChangeTodo extends Action<EActions.CHANGE_TODO> {
  payload: {
    todo: ITodo;
    changes: Partial<ITodo>;
  };
}

export interface IMoveTodo extends Action<EActions.MOVE_TODO> {
  payload: {
    todo: ITodo;
    status: ETodoStatus;
  };
}

export interface IGetTodo extends Action<EActions.HTTP_GET_TODOS> {}

export interface ICancelGetTodo extends Action<EActions.CANCEL_GET_TODOS> {}
