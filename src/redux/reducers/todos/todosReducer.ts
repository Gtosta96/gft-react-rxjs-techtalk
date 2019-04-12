import { Dispatch } from 'redux';

import { IAction } from '../../models/redux';
import { ETodoColors, ETodoStatus, ITodo } from '../../models/todo';
import { changeTodoColorHelper, moveTodoHelper } from './helpers';

const ADD_TODO = "ADD_TODO";
const CHANGE_TODO_COLOR = "CHANGE_TODO_COLOR";
const MOVE_TODO = "MOVE_TODO";

const HTTP_GET_TODOS_FETCHING = "HTTP_GET_TODOS_FETCHING";
const HTTP_GET_TODOS_SUCCESS = "HTTP_GET_TODOS_SUCCESS";
const HTTP_GET_TODOS_FAIL = "HTTP_GET_TODOS_FAIL";

export interface IState {
  isFetching: boolean;
  hasErrors: boolean;
  todos: ITodo[];
  colors: ETodoColors[];
}

const initialState: IState = {
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
export default function reducer(state = initialState, action: IAction<any>): IState {
  switch (action.type) {
    case ADD_TODO:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: state.todos.concat(action.payload),
        colors: state.colors
      };

    case CHANGE_TODO_COLOR:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: changeTodoColorHelper(state, action),
        colors: state.colors
      };

    case MOVE_TODO:
      return {
        isFetching: state.isFetching,
        hasErrors: state.hasErrors,
        todos: moveTodoHelper(state, action),
        colors: state.colors
      };

    case HTTP_GET_TODOS_FETCHING:
      return {
        isFetching: true,
        hasErrors: state.hasErrors,
        todos: state.todos,
        colors: state.colors
      };

    case HTTP_GET_TODOS_SUCCESS:
      return {
        isFetching: false,
        hasErrors: false,
        todos: action.payload,
        colors: state.colors
      };

    case HTTP_GET_TODOS_FAIL:
      return {
        isFetching: false,
        hasErrors: true,
        todos: initialState.todos,
        colors: state.colors
      };

    default:
      return state;
  }
}

export const addTodo = () => ({
  type: ADD_TODO,
  payload: {
    id: Math.random().toString(),
    title: "",
    description: "",
    color: ETodoColors.RED,
    status: ETodoStatus.TODO
  } as ITodo
});

export const changeTodoColor = (todo: ITodo, color: string) => ({
  type: CHANGE_TODO_COLOR,
  payload: { todo, color }
});

export const moveTodo = (todo: ITodo, status: string) => ({
  type: MOVE_TODO,
  payload: { todo, status }
});

export const getTodos = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: HTTP_GET_TODOS_FETCHING, payload: null });

    fetch("http://my-json-server.typicode.com/HerowayBrasil/04-react/todos")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: HTTP_GET_TODOS_SUCCESS,
          payload: json
        });
      })
      .catch(error => {
        return dispatch({
          type: HTTP_GET_TODOS_FAIL,
          payload: error
        });
      });
  };
};
