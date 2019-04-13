import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import todosReducer, { getTodosEpic } from './reducers/todos';

/**
 * Reducers
 */
const rootReducer = Redux.combineReducers({
  todos: todosReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

/**
 * Epics
 */
export const rootEpic = combineEpics(getTodosEpic);

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const store = Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);
  return store;
}
