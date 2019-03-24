import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

export default function configureStore() {
  return Redux.createStore(rootReducer, ReduxDevtools.composeWithDevTools());
}
