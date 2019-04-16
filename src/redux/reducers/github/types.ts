import { Action } from 'redux';

import { IGithubUser } from '../../models/github';

/**
 * Actions
 */
export enum EActions {
  HTTP_SEARCH_GITHUB_USERS = "@github/HTTP_SEARCH_GITHUB_USERS",
  HTTP_SEARCH_GITHUB_USERS_SUCCESS = "@github/HTTP_SEARCH_GITHUB_USERS_SUCCESS",
  HTTP_SEARCH_GITHUB_USERS_FAIL = "@github/HTTP_SEARCH_GITHUB_USERS_FAIL"
}

/**
 * State
 */
export interface IState {
  readonly isFetching: boolean;
  readonly hasErrors: boolean;
  readonly users: IGithubUser[];
}

/**
 * Action Creators
 */
export interface ISearchGithubUsers extends Action<EActions.HTTP_SEARCH_GITHUB_USERS> {
  payload: {
    query: string;
  };
}
