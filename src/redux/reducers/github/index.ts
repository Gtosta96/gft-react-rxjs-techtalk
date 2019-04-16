import { Action } from 'redux';
import * as reduxObservable from 'redux-observable';
import * as rxjs from 'rxjs';
import { ajax as rxjsAjax } from 'rxjs/ajax';
import * as rxjsOperators from 'rxjs/operators';

import { IAction } from '../../models/redux';
import { EActions, ISearchGithubUsers, IState } from './types';

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  users: []
};
export default function reducer(state = INITIAL_STATE, action: IAction<any>): IState {
  switch (action.type) {
    case EActions.HTTP_SEARCH_GITHUB_USERS:
      return {
        isFetching: true,
        hasErrors: state.hasErrors,
        users: state.users
      };

    case EActions.HTTP_SEARCH_GITHUB_USERS_SUCCESS:
      return {
        isFetching: false,
        hasErrors: false,
        users: action.payload
      };

    case EActions.HTTP_SEARCH_GITHUB_USERS_FAIL:
      return {
        isFetching: false,
        hasErrors: true,
        users: INITIAL_STATE.users
      };

    default:
      return state;
  }
}

export const searchGithubUsers = (query: string): ISearchGithubUsers => ({
  type: EActions.HTTP_SEARCH_GITHUB_USERS,
  payload: { query }
});

export const searchGithubUsersEpic = (action$: rxjs.Observable<Action>): rxjs.Observable<Action> =>
  action$.pipe(
    reduxObservable.ofType(EActions.HTTP_SEARCH_GITHUB_USERS),
    rxjsOperators.debounceTime(1000),
    rxjsOperators.switchMap((action: any) =>
      rxjsAjax.get(`https://api.github.com/search/users?q=${action.payload.query}`).pipe(
        rxjsOperators.map(xhr => ({
          type: EActions.HTTP_SEARCH_GITHUB_USERS_SUCCESS,
          payload: xhr.response.items
        })),
        rxjsOperators.catchError(error =>
          rxjs.of({ type: EActions.HTTP_SEARCH_GITHUB_USERS_FAIL, payload: error })
        )
      )
    )
  );
