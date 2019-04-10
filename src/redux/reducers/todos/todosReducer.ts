import { Dispatch } from 'redux';

import { IAction } from '../../models/redux';
import { ITodo } from '../../models/todo';

const HTTP_GET_TODOS_FETCHING = "HTTP_GET_TODOS_FETCHING";
const HTTP_GET_TODOS_SUCCESS = "HTTP_GET_TODOS_SUCCESS";
const HTTP_GET_TODOS_FAIL = "HTTP_GET_TODOS_FAIL";

interface IState {
  todos: ITodo[];
  isFetching: boolean;
  hasErrors: boolean;
}

const initialState: IState = {
  todos: [],
  isFetching: false,
  hasErrors: false
};
export default function reducer(state = initialState, action: IAction<any>): IState {
  switch (action.type) {
    case HTTP_GET_TODOS_FETCHING:
      return {
        todos: state.todos,
        hasErrors: state.hasErrors,
        isFetching: true
      };

    case HTTP_GET_TODOS_SUCCESS:
      return {
        todos: action.payload,
        hasErrors: false,
        isFetching: false
      };

    case HTTP_GET_TODOS_FAIL:
      return {
        todos: initialState.todos,
        hasErrors: true,
        isFetching: false
      };

    default:
      return state;
  }
}

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
