import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    promise()
  )
);

export default store;
