import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';

import { ITodo } from '../../models/todo';
import apiService from '../api';

class GithubService {
  private users$ = new rxjs.BehaviorSubject<any>([]);

  private fetchUsers = (query: string): void => {
    apiService
      // .get(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .get(`https://api.github.com/search/users?q=${query}`)
      .pipe(rxjsOperators.map(xhr => xhr.response.items))
      .subscribe(
        users => {
          this.users$.next(users);
        },
        error => {
          this.users$.error(error);
        }
      );
  };

  public getUsers = (): rxjs.Observable<ITodo[]> => {
    return this.users$.asObservable();
  };

  public searchUsers = (query: string) => {
    this.fetchUsers(query);
  };
}

const githubService = new GithubService();
export default githubService;
