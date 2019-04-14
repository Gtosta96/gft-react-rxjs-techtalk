import { ajax as rxjsAjax } from 'rxjs/ajax';

class ApiService {
  public get = (url: string) => {
    return rxjsAjax.get(url);
  };
}

const apiService = new ApiService();
export default apiService;
