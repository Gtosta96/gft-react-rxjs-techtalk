import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';

import { IGithubUser } from '../../models/github';
import apiService from '../api';

class GithubService {
  private query$ = new rxjs.Subject<string>();

  public getUsers = (): rxjs.Observable<IGithubUser[]> => {
    return this.query$.pipe(
      rxjsOperators.debounceTime(1000),
      rxjsOperators.switchMap(query =>
        apiService
          .get(`https://api.github.com/search/users?q=${query}`)
          .pipe(rxjsOperators.map(xhr => xhr.response.items))
      )
    );
  };

  public searchUsers = (query: string) => {
    this.query$.next(query);
  };
}

const githubService = new GithubService();
export default githubService;
