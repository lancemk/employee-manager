import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root.reducer'

import rootSaga from './sagas/rootSaga'
import { Provider } from 'react-redux';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();

// function render() {

//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )

//   // If you want to start measuring performance in your app, pass a function
//   // to log results (for example: reportWebVitals(console.log))
//   // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();

// }

// render()
// store.subscribe(render)

