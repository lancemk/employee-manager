import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counter from './reducers/counter.reducer'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

function render() {

  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

}

render()
store.subscribe(render)

