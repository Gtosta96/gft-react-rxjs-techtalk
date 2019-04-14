import * as rxjs from 'rxjs';
import { ajax as rxjsAjax, AjaxResponse } from 'rxjs/ajax';

class ApiService {
  public get = (url: string): rxjs.Observable<AjaxResponse> => {
    return rxjsAjax.get(url);
  };
}

const apiService = new ApiService();
export default apiService;
