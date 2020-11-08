import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,  combineReducers, applyMiddleware,} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {photoReducer, categoryReducer} from './reducers/rootReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const logger=createLogger();
const rootReducer = combineReducers({photoReducer, categoryReducer});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode>
<Provider store={store} >
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
