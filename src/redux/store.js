
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer/root.reducer'
import rootSaga from './rootSaga'

/**
 * initialize redux store
 */
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,

  // add a middleware, redux-saga for which listens any redux actions
  applyMiddleware(sagaMiddleware)
)

/**
 * setup a listner of on 'rootSaga'
 */
sagaMiddleware.run(rootSaga)

export default store