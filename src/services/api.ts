import * as rxjs from 'rxjs';
import { ajax as rxjsAjax, AjaxResponse } from 'rxjs/ajax';
import * as rxjsOperators from 'rxjs/operators';

class ApiService {
  private api$ = new rxjs.ReplaySubject(1);

  constructor() {
    this.api$.next(true);
  }

  public get = (url: string): rxjs.Observable<AjaxResponse> => {
    return this.api$.pipe(
      rxjsOperators.distinctUntilChanged(),
      rxjsOperators.first(),
      rxjsOperators.switchMap(() => rxjsAjax.get(url))
    );
  };
}

const apiService = new ApiService();
export default apiService;
