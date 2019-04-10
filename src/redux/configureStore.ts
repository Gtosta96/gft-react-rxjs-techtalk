import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cardsReducer from './reducers/cardsReducer';
import todosReducer from './reducers/todosReducer';

const rootReducer = Redux.combineReducers({
  cards: cardsReducer,
  todos: todosReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk))
  );
}
