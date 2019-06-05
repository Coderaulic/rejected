import React from 'react';
import 'tachyons';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { searchCompanies, updateActiveCardID } from './components/reducers';

const rootReducer = combineReducers({ searchCompanies, updateActiveCardID });
const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
